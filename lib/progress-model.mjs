const object = v => !!v && typeof v === 'object' && !Array.isArray(v);
export function validState(state) {
  if (!object(state)) return false;
  for (const key of ['completed','cards','code','attempts']) if (!object(state[key])) return false;
  if (!Array.isArray(state.history) || state.history.length > 100) return false;
  if (state.active !== null && !object(state.active)) return false;
  if (state.active && (!Array.isArray(state.active.questions) || state.active.questions.length > 100 || !object(state.active.answers))) return false;
  if (state.ui !== undefined && !object(state.ui)) return false;
  return JSON.stringify(state).length <= 900_000;
}
export const response = (data,status=200) => Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export async function handleProgress(request,db,userId) {
  if (!userId) return response({error:'Sign in to sync progress.'},401);
  if (!db) return response({error:'Cloud progress is not available.'},503);
  if (request.method === 'GET') {
    const row=await db.prepare('SELECT revision, data, updated_at FROM study_progress WHERE user_id = ?').bind(userId).first();
    return response(row?{revision:row.revision,state:JSON.parse(row.data),updatedAt:row.updated_at}:{revision:0,state:null,updatedAt:null});
  }
  if(request.method !== 'PUT') return response({error:'Method not allowed.'},405);
  const origin=request.headers.get('origin');
  if(origin && origin !== new URL(request.url).origin) return response({error:'Origin mismatch.'},403);
  if(!request.headers.get('content-type')?.startsWith('application/json')) return response({error:'JSON required.'},415);
  if(Number(request.headers.get('content-length'))>1_000_000) return response({error:'Backup too large.'},413);
  const text=await request.text();
  if(text.length>1_000_000) return response({error:'Backup too large.'},413);
  let body;try { body=JSON.parse(text); } catch { return response({error:'Invalid JSON.'},400); }
  if(!Number.isInteger(body.revision)||body.revision<0||!validState(body.state)) return response({error:'Invalid progress format.'},400);
  const revision=body.revision+1, now=Date.now();
  const result=await db.prepare(`INSERT INTO study_progress (user_id, revision, data, updated_at)
    SELECT ?, ?, ?, ? WHERE ? = 0 OR EXISTS (SELECT 1 FROM study_progress WHERE user_id = ? AND revision = ?)
    ON CONFLICT(user_id) DO UPDATE SET revision=excluded.revision, data=excluded.data, updated_at=excluded.updated_at
    WHERE study_progress.revision = ?`).bind(userId,revision,JSON.stringify(body.state),now,body.revision,userId,body.revision,body.revision).run();
  if(result.meta.changes!==1) return response({error:'Progress changed on another device. Your local copy was kept.'},409);
  return response({revision,updatedAt:now});
}
