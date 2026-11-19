export default {
  "lessons": [
    {
      "id": 1,
      "name": "OS foundations",
      "title": "What the operating system does",
      "group": "Foundations",
      "description": "Kernel, system calls, user mode, virtual machines and OS models.",
      "blocks": [
        {
          "kind": "heading",
          "text": "1 · Зачем нужна операционная система"
        },
        {
          "kind": "heading",
          "text": "Логика с нуля"
        },
        {
          "kind": "paragraph",
          "text": "Представь, что Chrome, музыка и редактор одновременно хотят CPU, RAM и диск. Если каждое приложение самостоятельно управляет устройствами, они будут мешать друг другу. ОС распределяет ресурсы и даёт удобные объекты: процесс, файл, каталог, сетевое соединение."
        },
        {
          "kind": "paragraph",
          "text": "EN: The OS has two central roles: resource manager and provider of abstractions. It coordinates hardware use and gives applications convenient interfaces."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Понятие",
              "Простое объяснение",
              "English description"
            ],
            [
              "Kernel",
              "Привилегированное ядро ОС",
              "The privileged core that manages system resources."
            ],
            [
              "Shell",
              "Интерпретатор введённых команд",
              "A command interpreter, such as Bash."
            ],
            [
              "Program",
              "Инструкции, сохранённые в файле",
              "A passive set of instructions."
            ],
            [
              "Process",
              "Выполняющийся экземпляр программы",
              "A program in execution, with its own state and resources."
            ],
            [
              "Driver",
              "Код управления конкретным устройством",
              "Software that controls a specific hardware device."
            ],
            [
              "System call",
              "Контролируемый запрос к ядру",
              "An interface for requesting kernel services."
            ]
          ]
        },
        {
          "kind": "heading",
          "text": "User mode и kernel mode"
        },
        {
          "kind": "paragraph",
          "text": "В user mode приложение имеет ограниченные привилегии. В kernel mode ядро выполняет привилегированные операции: управляет памятью, устройствами и прерываниями. **Root user и kernel mode — разные понятия:** программа root тоже обычно выполняется в user mode, пока не обращается к ядру."
        },
        {
          "kind": "paragraph",
          "text": "Пример чтения файла: Python → библиотека/system call → ядро и файловая система → драйвер → устройство. Данные могут уже находиться в кэше: обращение к диску требуется не всегда."
        },
        {
          "kind": "paragraph",
          "text": "EN: A system call performs a controlled transition to the kernel. A function call does not necessarily require a mode switch."
        },
        {
          "kind": "paragraph",
          "text": "**Запомни:** `open`, `read`, `write`, `close` работают с файлами; `fork` создаёт процесс; `exec` заменяет образ текущего процесса новой программой. Один program может иметь несколько processes."
        },
        {
          "kind": "heading",
          "text": "1–2 · Типы ОС, модели и виртуальные машины"
        },
        {
          "kind": "paragraph",
          "text": "Этот блок дополняет слайды по Assignment-2 и силлабусу. Основа — глава 1 загруженного учебника Tanenbaum & Bos, 4th edition."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Девять типов из §1.4",
              "Типичный пример применения"
            ],
            [
              "Mainframe OS",
              "Массовая пакетная обработка банковских операций"
            ],
            [
              "Server OS",
              "Веб-сервер, база данных, файловый сервер"
            ],
            [
              "Multiprocessor OS",
              "Управление машиной с несколькими CPU/ядрами"
            ],
            [
              "Personal computer OS",
              "Повседневные задачи на ноутбуке"
            ],
            [
              "Handheld OS",
              "Смартфон или планшет"
            ],
            [
              "Embedded OS",
              "ОС внутри роутера или бытового устройства"
            ],
            [
              "Sensor-node OS",
              "Узел сети датчиков с ограниченной энергией"
            ],
            [
              "Real-time OS",
              "Управление оборудованием с временными ограничениями"
            ],
            [
              "Smart-card OS",
              "Выполнение операций внутри смарт-карты"
            ]
          ]
        },
        {
          "kind": "heading",
          "text": "Multiprogramming и time sharing"
        },
        {
          "kind": "paragraph",
          "text": "Multiprogramming: в памяти несколько программ; пока одна ждёт I/O, CPU может выполнять другую. Time sharing добавляет быстрое переключение между задачами, чтобы пользователи получали интерактивный отклик."
        },
        {
          "kind": "paragraph",
          "text": "EN: Multiprogramming improves CPU utilization. Time sharing emphasizes responsive interaction by sharing CPU time among tasks."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Модель",
              "Как устроена",
              "Что запомнить"
            ],
            [
              "Monolithic kernel",
              "Много служб работает внутри ядра",
              "Быстрое взаимодействие; ошибка компонента может повлиять на ядро"
            ],
            [
              "Layered system",
              "Система разделена на уровни",
              "Понятная структура, но дополнительное прохождение уровней"
            ],
            [
              "Microkernel",
              "Минимум в ядре, часть служб в user space",
              "Изоляция; взаимодействие через IPC"
            ],
            [
              "Virtual machine",
              "Гипервизор предоставляет виртуальное оборудование",
              "Host запускает VM; guest OS работает внутри VM"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "VirtualBox — гипервизор; Ubuntu внутри него — guest. VDI — формат виртуального диска; OVA — архив конфигурации и образов VM. VM разделяет реальные ресурсы с host."
        },
        {
          "kind": "paragraph",
          "text": "**Licensing:** open source позволяет изучать исходники в рамках лицензии. Free software относится к свободам пользователя, а не только к цене. GPL требует сохранения соответствующих условий при распространении производных работ; permissive licenses обычно налагают меньше требований. Linux — ядро, Ubuntu — дистрибутив с ядром и пользовательскими программами."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=77401"
    },
    {
      "id": 2,
      "name": "Shell & networking",
      "title": "Talk to Linux",
      "group": "Foundations",
      "description": "Commands, help, SSH, IP addresses and troubleshooting.",
      "blocks": [
        {
          "kind": "heading",
          "text": "2 · Shell, команды и помощь"
        },
        {
          "kind": "heading",
          "text": "Terminal ≠ shell ≠ kernel"
        },
        {
          "kind": "paragraph",
          "text": "Terminal показывает текст и принимает ввод. Shell разбирает команду и запускает действие. Kernel управляет ресурсами. В интерактивной работе ты чаще всего общаешься с Bash через terminal."
        },
        {
          "kind": "paragraph",
          "text": "EN: A terminal is an input/output interface. A shell interprets commands. The kernel provides the underlying operating-system services."
        },
        {
          "kind": "code",
          "text": "ls -la /home\n# ls: command; -la: options; /home: argument"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Команда",
              "Назначение / English purpose"
            ],
            [
              "`man ls`",
              "Руководство / Read the manual page."
            ],
            [
              "`ls --help`",
              "Краткая справка / Display usage and options."
            ],
            [
              "`apropos archive`",
              "Поиск по описаниям man / Search manual descriptions."
            ],
            [
              "`type cd`",
              "Тип команды / Identify a builtin, alias, function or executable."
            ],
            [
              "`command -v bash`",
              "Как shell найдёт команду / Show command resolution."
            ],
            [
              "`history`",
              "История этой оболочки / Display command history."
            ],
            [
              "`whoami`; `id`",
              "Имя пользователя; UID, GID, группы"
            ],
            [
              "`uname -r`; `uname -m`",
              "Версия ядра; архитектура машины"
            ],
            [
              "`hostname`; `cat /etc/os-release`",
              "Имя хоста; сведения о дистрибутиве"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**Prompt** — приглашение к вводу, например `maussym@ubuntu:~$`. `~` обозначает домашний каталог. `$` обычно показывают для обычного пользователя, `#` — для root, но prompt можно изменить: это не надёжная проверка привилегий."
        },
        {
          "kind": "paragraph",
          "text": "`Tab` дополняет имя, стрелка вверх возвращает прошлую команду, `Ctrl+R` ищет в истории, `Ctrl+L` очищает экран. `cd` должен быть builtin, чтобы менять каталог самой текущей shell."
        },
        {
          "kind": "heading",
          "text": "Посмотреть ресурсы"
        },
        {
          "kind": "paragraph",
          "text": "`lscpu` — CPU; `free -h` — RAM и swap; `ps aux` — снимок процессов; `top` — обновляемый монитор; `lsblk` — блочные устройства; `df -h` — пространство файловых систем."
        },
        {
          "kind": "paragraph",
          "text": "**Ловушка:** `touch existing.txt` обновляет время существующего файла, а не очищает его. `-h` не во всех командах означает help: проверяй справку."
        },
        {
          "kind": "heading",
          "text": "2 и 10 · Сеть, SSH и диагностика"
        },
        {
          "kind": "paragraph",
          "text": "IPv4 — 32-битный адрес, обычно записанный четырьмя числами 0–255. Порт — 16-битное число 0–65535. IP помогает адресовать узел/интерфейс, порт — сетевую конечную точку приложения. TCP и UDP — разные транспортные протоколы; одинаковый номер порта может использоваться независимо в TCP и UDP."
        },
        {
          "kind": "paragraph",
          "text": "EN: SSH provides encrypted remote login and command execution. An IP address identifies a network destination, while a transport-layer port identifies an endpoint on that host."
        },
        {
          "kind": "code",
          "text": "ip addr                 # addresses and interfaces\nip route                # routing table and default gateway\nss -tuln                # listening TCP/UDP sockets, numeric output\nssh student@192.0.2.10  # example address; replace with your VM address\nssh -p 2222 student@192.0.2.10"
        },
        {
          "kind": "paragraph",
          "text": "SSH обычно использует TCP 22. На удалённой машине нужен SSH server, на твоей — SSH client. В Ubuntu имя systemd-службы часто `ssh`, в других системах — `sshd`; проверяй установленную службу."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Симптом",
              "Что проверить",
              "Why / English"
            ],
            [
              "Имя не разрешается",
              "DNS: `getent hosts example.com`",
              "Name resolution can fail before any connection is attempted."
            ],
            [
              "Нет маршрута",
              "`ip route`, настройки VM",
              "The destination may be unreachable through the configured network."
            ],
            [
              "Connection refused",
              "Адрес/порт, `systemctl status ssh`, `ss -tln`",
              "No listener or an explicit rejection may be present."
            ],
            [
              "Timeout",
              "Доступность узла, firewall, режим сети VM",
              "Packets or replies may be filtered or lost."
            ],
            [
              "Permission denied",
              "Имя пользователя, ключ/пароль, правила доступа",
              "The server was reached but authentication or access failed."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "NAT обычно даёт VM исходящий доступ; входящее подключение может потребовать port forwarding. Bridged делает VM участником локальной сети. Host-only связывает host и VM без обычного выхода наружу; Internal соединяет VM между собой."
        },
        {
          "kind": "paragraph",
          "text": "**Практическая логика:** сначала адрес и маршрут, затем DNS, доступный порт, служба и аутентификация. Успешный `ping` не доказывает работоспособность SSH; отсутствие ответа ICMP не доказывает, что хост выключен."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=78272"
    },
    {
      "id": 3,
      "name": "Files & streams",
      "title": "Work with files and text streams",
      "group": "Linux essentials",
      "description": "Paths, editors, find, pipes, redirection and archives.",
      "blocks": [
        {
          "kind": "heading",
          "text": "3 · Пути, файлы и каталоги"
        },
        {
          "kind": "paragraph",
          "text": "Абсолютный путь начинается с `/`: `/home/student/notes.txt`. Относительный отсчитывается от текущего каталога: `documents/notes.txt`. `.` — текущий каталог, `..` — родительский, `~` — home, `cd -` — предыдущий рабочий каталог."
        },
        {
          "kind": "paragraph",
          "text": "EN: An absolute path starts at the filesystem root. A relative path is interpreted from the current working directory."
        },
        {
          "kind": "code",
          "text": "mkdir -p ~/os-practice/documents ~/os-practice/projects\ncd ~/os-practice\ntouch documents/notes.txt\nprintf 'Linux is useful\\n' > documents/notes.txt\ncp documents/notes.txt projects/copy.txt\nmv projects/copy.txt projects/summary.txt\ncat projects/summary.txt"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Операция",
              "Команда",
              "Смысл"
            ],
            [
              "Где я?",
              "`pwd`",
              "Print working directory."
            ],
            [
              "Что внутри?",
              "`ls -la`",
              "Long listing, including hidden entries."
            ],
            [
              "Создать папку",
              "`mkdir -p a/b`",
              "Create missing parent directories."
            ],
            [
              "Скопировать папку",
              "`cp -r source destination`",
              "Copy recursively."
            ],
            [
              "Переместить/переименовать",
              "`mv old.txt new.txt`",
              "Move or rename."
            ],
            [
              "Удалить пустую папку",
              "`rmdir emptydir`",
              "Remove an empty directory."
            ],
            [
              "Найти файлы",
              "`find . -type f -name '*.log'`",
              "Search recursively by type and name."
            ],
            [
              "Узнать inode",
              "`ls -li file.txt`",
              "Display inode number."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "`ls -l` показывает тип, права, число hard links, владельца, группу, размер, время изменения и имя. У каталога показанный размер не равен суммарному размеру его содержимого: для этого используй `du -sh directory`."
        },
        {
          "kind": "paragraph",
          "text": "`find /home -type f -size +10M` ищет обычные файлы по размеру. `locate` использует индекс и может не видеть недавние изменения. Кавычки в `-name '*.log'` сохраняют шаблон для `find`, не давая shell раскрыть его заранее."
        },
        {
          "kind": "paragraph",
          "text": "**Ловушка:** Linux различает регистр: `Report.txt` и `report.txt` — разные имена. Удаление через `rm` обычно не использует корзину; учебные удаления делай на специально созданных файлах."
        },
        {
          "kind": "heading",
          "text": "3 · Потоки, перенаправления и pipe"
        },
        {
          "kind": "paragraph",
          "text": "У процесса есть стандартные потоки: **0 = stdin**, **1 = stdout**, **2 = stderr**. Поток — откуда приходят данные или куда уходят. Pipe соединяет stdout одной команды со stdin следующей."
        },
        {
          "kind": "paragraph",
          "text": "EN: Redirection changes where a command reads or writes. A pipe connects the standard output of one command to the standard input of another."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Запись",
              "Что происходит"
            ],
            [
              "`cmd > out.txt`",
              "stdout в файл, старое содержимое заменяется"
            ],
            [
              "`cmd >> out.txt`",
              "stdout добавляется в конец"
            ],
            [
              "`cmd < input.txt`",
              "stdin читается из файла"
            ],
            [
              "`cmd 2> error.txt`",
              "только stderr в файл"
            ],
            [
              "`cmd > all.txt 2>&1`",
              "stdout в файл, stderr туда же"
            ],
            [
              "`cmd 2>/dev/null`",
              "сообщения об ошибках отбрасываются"
            ],
            [
              "`cmd1 | cmd2`",
              "stdout первой становится stdin второй"
            ]
          ]
        },
        {
          "kind": "code",
          "text": "printf 'cat\\ndog\\ncat\\n' > animals.txt\ngrep 'cat' animals.txt | wc -l\n# 2: grep selected two lines; wc counted these lines\n\nls -l > file_list.txt\ncat file_list.txt\nprintf 'THE END\\n' >> file_list.txt"
        },
        {
          "kind": "heading",
          "text": "Как считать правильно"
        },
        {
          "kind": "paragraph",
          "text": "`grep -c 'cat' animals.txt` считает **подходящие строки**. Если одна строка содержит `cat cat`, она учитывается один раз. `grep -o 'cat' file | wc -l` считает неперекрывающиеся найденные совпадения. `wc -l` считает символы перевода строки, что обычно соответствует числу строк в обычном текстовом файле."
        },
        {
          "kind": "paragraph",
          "text": "Порядок перенаправлений важен: `> all.txt 2>&1` объединяет оба потока в файле. В `2>&1 > out.txt` stderr получает старое назначение stdout, а stdout затем отдельно меняется на файл."
        },
        {
          "kind": "paragraph",
          "text": "`A && B` запускает B при успехе A; `A || B` — при неуспехе A; `A; B` запускает B после A независимо от exit status. `|` передаёт данные; это другая задача."
        },
        {
          "kind": "heading",
          "text": "3 · Редакторы, архивы и сжатие"
        },
        {
          "kind": "heading",
          "text": "Редактирование"
        },
        {
          "kind": "paragraph",
          "text": "В `nano file.txt` ввод обычный: `Ctrl+O`, Enter сохраняют; `Ctrl+X` выходит. В Vim сначала Normal mode. Нажми `i` для ввода, `Esc` для возврата, затем `:wq` для сохранения и выхода или `:q!` для выхода без сохранения."
        },
        {
          "kind": "paragraph",
          "text": "EN: Vim is modal: normal mode interprets keys as commands, while insert mode inserts text. Nano offers a simpler non-modal editing workflow."
        },
        {
          "kind": "heading",
          "text": "Archiving ≠ compression"
        },
        {
          "kind": "paragraph",
          "text": "Архив объединяет несколько файлов. Сжатие уменьшает размер представления данных. Обычный `.tar` сам по себе не означает сжатие; `.tar.gz` — tar-архив, сжатый gzip."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Задача",
              "Команда"
            ],
            [
              "Создать tar",
              "`tar -cvf backup.tar documents/`"
            ],
            [
              "Посмотреть содержимое",
              "`tar -tf backup.tar`"
            ],
            [
              "Извлечь tar",
              "`tar -xvf backup.tar`"
            ],
            [
              "Создать tar.gz",
              "`tar -czf backup.tar.gz documents/`"
            ],
            [
              "Извлечь tar.gz",
              "`tar -xzf backup.tar.gz`"
            ],
            [
              "gzip одного файла",
              "`gzip notes.txt`"
            ],
            [
              "Распаковать gzip",
              "`gzip -d notes.txt.gz`"
            ],
            [
              "bzip2 / xz",
              "`bzip2 notes.txt`; `xz notes.txt`"
            ],
            [
              "ZIP каталога",
              "`zip -r backup.zip documents/`"
            ],
            [
              "Извлечь ZIP",
              "`unzip backup.zip`"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "В tar: `c` create, `x` extract, `t` list, `v` verbose, `f` archive filename, `z` gzip. `-f` должен получить имя архива. Для сжатия bzip2 используется `j`, xz — `J`."
        },
        {
          "kind": "paragraph",
          "text": "EN: Compression tools trade execution time for storage savings. Actual compression ratios depend on the input data; there is no universal winner for every file."
        },
        {
          "kind": "heading",
          "text": "Пакеты Ubuntu из Assignment-3"
        },
        {
          "kind": "paragraph",
          "text": "`sudo apt update` обновляет сведения о доступных пакетах. `sudo apt install package` устанавливает пакет; `sudo apt upgrade` обновляет установленные пакеты. **Update package lists** и **upgrade installed software** — разные действия."
        },
        {
          "kind": "paragraph",
          "text": "Обычные `gzip`, `bzip2`, `xz` могут заменить исходный файл сжатым вариантом. Если нужно сохранить оригинал, проверь опцию `-k` в справке конкретного инструмента."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=81408"
    },
    {
      "id": 4,
      "name": "Text & permissions",
      "title": "Read patterns and calculate permissions",
      "group": "Linux essentials",
      "description": "Variables, quoting, globbing, regex, chmod and ownership.",
      "blocks": [
        {
          "kind": "heading",
          "text": "4–5 · Переменные, кавычки и globbing"
        },
        {
          "kind": "code",
          "text": "COURSE=\"Operating Systems\"   # no spaces around =\necho \"$COURSE\"\nexport COURSE               # pass to subsequently started children\nexport PATH=\"$PATH:/usr/local/bin\"\nalias ll='ls -la'\nPS1='\\u@\\h:\\w\\$ '\nPS2='>>> '"
        },
        {
          "kind": "paragraph",
          "text": "EN: Shell variables belong to a shell. Exported variables are inherited by subsequently started child processes. Export does not update all existing processes or make a variable permanent."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Переменная",
              "Значение"
            ],
            [
              "PATH",
              "Каталоги поиска исполняемых команд; разделены `:`"
            ],
            [
              "HOME / USER",
              "Домашний каталог / имя пользователя"
            ],
            [
              "PWD / SHELL",
              "Текущий каталог / настроенная login shell"
            ],
            [
              "LANG / TERM / EDITOR",
              "Локаль / тип терминала / предпочитаемый редактор"
            ],
            [
              "PS1 / PS2",
              "Основное / дополнительное приглашение Bash"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "`echo \"$SHELL\"` не гарантирует, что именно эта shell сейчас интерпретирует ввод. Добавление строки в `~/.bashrc` применяет настройку к подходящим будущим интерактивным Bash-сессиям; текущую можно обновить `source ~/.bashrc`."
        },
        {
          "kind": "heading",
          "text": "Quoting"
        },
        {
          "kind": "paragraph",
          "text": "Если `name=\"Maussym\"`, то `echo \"$name\"` выводит Maussym, а `echo '$name'` — буквальный `$name`. `echo \"\\$name\"` также печатает `$name`. `$(pwd)` подставляет результат команды. Двойные кавычки сохраняют пробелы внутри значения и обычно предотвращают нежелательное разделение аргументов."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Glob для имён файлов",
              "Смысл",
              "Пример"
            ],
            [
              "`*`",
              "Ноль или больше символов",
              "`*.txt`"
            ],
            [
              "`?`",
              "Ровно один символ",
              "`file?.txt`"
            ],
            [
              "`[abc]`",
              "Один из перечисленных символов",
              "`file[12].txt`"
            ],
            [
              "`[!abc]`",
              "Один символ вне набора",
              "`[!a]*`"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**Ловушка:** glob `*` обычно не включает имена с начальной точкой. В regex звёздочка имеет другой смысл: повторяет предыдущий элемент. `ls -d folder*` показывает сами совпавшие каталоги, а не их содержимое."
        },
        {
          "kind": "heading",
          "text": "4 · Фильтрация текста и regular expressions"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Инструмент",
              "Для чего / English purpose"
            ],
            [
              "`head -n 10 file`; `tail -n 10 file`",
              "Начало / конец файла"
            ],
            [
              "`less file`",
              "Постраничный просмотр / Browse text interactively."
            ],
            [
              "`sort -n file`; `sort -r file`",
              "Числовая / обратная сортировка"
            ],
            [
              "`sort -u file`",
              "Сортировка с устранением повторов"
            ],
            [
              "`cut -d: -f1 /etc/passwd`",
              "Выделение первого поля с разделителем `:`"
            ],
            [
              "`tr ':' ' '`",
              "Замена символов в потоке"
            ],
            [
              "`awk '{print $1}' file`",
              "Первое поле; разделитель по умолчанию — whitespace"
            ],
            [
              "`sed 's/old/new/g' file`",
              "Замена совпадений в выводе; исходный файл не меняется"
            ],
            [
              "`grep -i pattern file`",
              "Строки без учёта регистра"
            ],
            [
              "`grep -v pattern file`",
              "Строки, которые не совпали"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "EN: A regular expression describes a text pattern. Grep selects lines that match a pattern; it does not search filenames unless filenames themselves are its input text."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Regex",
              "Смысл",
              "Пример"
            ],
            [
              "`^` / `$`",
              "Начало / конец строки",
              "`^root:`; `/bin/bash$`"
            ],
            [
              "`.` / `\\.`",
              "Любой один символ / буквальная точка",
              "`a.b`; `\\.log$`"
            ],
            [
              "`[0-9]`",
              "Одна цифра",
              "`[0-9]+` с `grep -E`"
            ],
            [
              "`*`",
              "Ноль или больше повторов предыдущего элемента",
              "`ab*` подходит к a, ab, abb"
            ],
            [
              "`+`, `?`, `{2,4}`",
              "1+, 0–1, от 2 до 4 повторов; ERE",
              "`grep -E '[0-9]{2,4}' file`"
            ],
            [
              "`A|B` / `(AB)`",
              "Альтернатива / группировка; ERE",
              "`grep -E 'user|admin' file`"
            ]
          ]
        },
        {
          "kind": "code",
          "text": "grep -Ec '^r.*:/bin/bash$' /etc/passwd\n# starts with r, later contains :, ends with /bin/bash"
        },
        {
          "kind": "paragraph",
          "text": "**Не заучивай ошибку слайда:** `.*` — не универсальный оператор AND. `A.*B` требует A перед B. Чтобы выбрать строки, содержащие оба шаблона в любом порядке, можно использовать `grep 'A' file | grep 'B'`."
        },
        {
          "kind": "heading",
          "text": "4 и 6 · Права доступа: считать, а не угадывать"
        },
        {
          "kind": "paragraph",
          "text": "Для обычных permission bits три класса: **u = owner**, **g = group**, **o = others**. Для каждого класса складываются **r = 4**, **w = 2**, **x = 1**. Отсутствие разрешений = 0."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Число",
              "Биты",
              "English meaning"
            ],
            [
              "0",
              "`---`",
              "No permissions"
            ],
            [
              "1",
              "`--x`",
              "Execute/search only"
            ],
            [
              "2",
              "`-w-`",
              "Write only"
            ],
            [
              "3",
              "`-wx`",
              "Write and execute/search"
            ],
            [
              "4",
              "`r--`",
              "Read only"
            ],
            [
              "5",
              "`r-x`",
              "Read and execute/search"
            ],
            [
              "6",
              "`rw-`",
              "Read and write"
            ],
            [
              "7",
              "`rwx`",
              "Read, write and execute/search"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**754 = 7 | 5 | 4 = rwx | r-x | r--.** Владелец может читать, менять и запускать; группа — читать и запускать; остальные — читать. Таблица чисел на одном из слайдов Lecture-4 содержит ошибку; используй эту корректную таблицу."
        },
        {
          "kind": "code",
          "text": "chmod 754 script.sh\nchmod u+x script.sh     # add owner execute bit\nchmod g-w script.sh     # remove group write bit\nchmod o= secret.txt     # clear all permissions for others\nsudo chown alex:research report.txt\nchgrp research report.txt"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Право",
              "Для обычного файла",
              "Для каталога"
            ],
            [
              "r",
              "Прочитать содержимое",
              "Прочитать список имён"
            ],
            [
              "w",
              "Изменить содержимое",
              "Менять записи каталога; обычно нужен также x"
            ],
            [
              "x",
              "Выполнить как программу",
              "Traverse/search: пройти к объекту внутри"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "EN: File write permission controls modification of file contents. Removing a directory entry normally depends on write and search permissions on the parent directory, with extra restrictions such as the sticky bit."
        },
        {
          "kind": "paragraph",
          "text": "**Ловушка:** `chmod` меняет mode bits; `chown` — владельца; `chgrp` — группу. Чтение файла требует прохода по родительским каталогам. Расширение `.sh` само по себе не даёт execute permission."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=85521"
    },
    {
      "id": 5,
      "name": "Processes & workflow",
      "title": "Control running programs",
      "group": "System management",
      "description": "Processes, signals, priorities, boot targets and cron.",
      "blocks": [
        {
          "kind": "heading",
          "text": "5 · Процессы и job control"
        },
        {
          "kind": "paragraph",
          "text": "Запущенная программа получает PID и состояние. Shell job — задача, которую отслеживает конкретная shell; её job number вроде `%1` отличается от системного PID."
        },
        {
          "kind": "paragraph",
          "text": "EN: A process is an executing program. A shell job is a shell-managed command or pipeline. A job number is not the same as a process ID."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Состояние",
              "Логика",
              "Typical Linux state"
            ],
            [
              "Ready / running",
              "Готов к CPU или выполняется",
              "R объединяет runnable/running"
            ],
            [
              "Sleeping / blocked",
              "Ждёт событие, данные или ресурс",
              "S; D для некоторых непрерываемых ожиданий"
            ],
            [
              "Stopped",
              "Выполнение приостановлено",
              "T"
            ],
            [
              "Zombie",
              "Завершился, но родитель ещё не забрал exit status",
              "Z"
            ]
          ]
        },
        {
          "kind": "code",
          "text": "sleep 300 &\npid=$!\nps -o pid,ppid,stat,ni,cmd -p \"$pid\"\njobs\nfg %1\n# Ctrl+Z stops the foreground job\nbg %1"
        },
        {
          "kind": "paragraph",
          "text": "`&` запускает асинхронно, shell не ждёт завершения. `$!` — PID последней асинхронной команды. `jobs` видит задачи текущей shell, `ps` — процессы в выбранной области системы. `fg` возобновляет/переводит задачу в foreground, `bg` — возобновляет в background."
        },
        {
          "kind": "heading",
          "text": "ps и top"
        },
        {
          "kind": "paragraph",
          "text": "`ps aux` или `ps -ef` дают снимок процессов. `top` регулярно обновляет данные; `q` выходит. `ps -p 1 -o pid,comm,args` показывает PID 1; в обычной Ubuntu с systemd это systemd, но в контейнере может быть иначе."
        },
        {
          "kind": "paragraph",
          "text": "**CPU-bound** процесс в основном вычисляет. **I/O-bound** часто ждёт устройства. Пока один процесс ждёт I/O, ОС может дать CPU другому. Blocked не означает terminated."
        },
        {
          "kind": "paragraph",
          "text": "**Ловушка:** `who` показывает вошедших пользователей, а не полный список процессов. Zombie уже не выполняется: посылать ему SIGKILL бессмысленно; родитель должен получить его статус через wait."
        },
        {
          "kind": "heading",
          "text": "5 · Сигналы и приоритет"
        },
        {
          "kind": "paragraph",
          "text": "`kill` отправляет сигнал. Название не означает, что любой сигнал обязательно завершит процесс. По умолчанию посылается TERM."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Действие",
              "Команда / клавиши",
              "Что происходит"
            ],
            [
              "Попросить завершиться",
              "`kill -TERM PID`",
              "SIGTERM; программа может обработать сигнал"
            ],
            [
              "Принудительно завершить",
              "`kill -KILL PID`",
              "SIGKILL; нельзя перехватить/игнорировать"
            ],
            [
              "Остановить",
              "`kill -STOP PID`",
              "SIGSTOP; нельзя перехватить/игнорировать"
            ],
            [
              "Продолжить",
              "`kill -CONT PID`",
              "Возобновляет остановленное выполнение"
            ],
            [
              "Прервать foreground",
              "Ctrl+C",
              "Обычно SIGINT foreground process group"
            ],
            [
              "Приостановить foreground",
              "Ctrl+Z",
              "Обычно SIGTSTP foreground process group"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "EN: SIGTERM requests termination and allows cleanup if handled. SIGKILL forces termination without application-level cleanup. SIGSTOP suspends execution; SIGCONT resumes it."
        },
        {
          "kind": "heading",
          "text": "Nice value"
        },
        {
          "kind": "paragraph",
          "text": "Для обычных time-sharing задач Linux nice value обычно от **-20 до 19**. Меньше число → выше относительный приоритет CPU. Больше число → процесс «вежливее», уступает другим. Это не гарантия точной скорости и не класс real-time scheduling."
        },
        {
          "kind": "code",
          "text": "nice -n 10 sleep 300 &\npid=$!\nps -o pid,ni,cmd -p \"$pid\"\nrenice -n 15 -p \"$pid\"\n# Raising CPU priority, e.g. reducing NI, usually needs privileges."
        },
        {
          "kind": "paragraph",
          "text": "Исходная shell с NI=0 запускает `nice -n 10 ...` с NI=10. `renice -n 15` меняет существующий процесс на NI=15. В задании также используется привилегированное изменение до NI=-5."
        },
        {
          "kind": "paragraph",
          "text": "**Не перепутай:** `nice` — запуск с изменённым nice value; `renice` — изменение существующего процесса. `kill -STOP` не удаляет процесс. Background не означает stopped: задача может продолжать работать без владения terminal foreground."
        },
        {
          "kind": "heading",
          "text": "3/5 · Загрузка, BIOS/UEFI и targets"
        },
        {
          "kind": "paragraph",
          "text": "Дополнение из силлабуса и практических задач Assignment-5."
        },
        {
          "kind": "paragraph",
          "text": "Обычная последовательность: firmware BIOS/UEFI проверяет и подготавливает оборудование → выбирается bootloader → загружаются kernel и initial RAM filesystem → ядро инициализирует систему → стартует PID 1 → запускаются нужные службы и пользовательские сеансы."
        },
        {
          "kind": "paragraph",
          "text": "EN: Firmware initializes the machine. A bootloader loads the kernel. The kernel initializes the OS and starts the first user-space process, commonly systemd on Ubuntu."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Понятие / команда",
              "Назначение"
            ],
            [
              "BIOS / UEFI",
              "Firmware; предшествует загрузке ОС"
            ],
            [
              "GRUB",
              "Пример загрузчика, может предлагать выбор ОС/ядра"
            ],
            [
              "initramfs",
              "Раннее пользовательское окружение для загрузки системы"
            ],
            [
              "`ps -p 1`",
              "Проверка первого процесса user space"
            ],
            [
              "`systemctl get-default`",
              "Какой target используется по умолчанию"
            ],
            [
              "`systemctl list-units --type=target`",
              "Загруженные активные targets"
            ],
            [
              "`journalctl -b`",
              "Journal текущей загрузки"
            ],
            [
              "`runlevel`",
              "Совместимость с исторической моделью SysV runlevels"
            ]
          ]
        },
        {
          "kind": "heading",
          "text": "Target — группа зависимостей и желаемое состояние"
        },
        {
          "kind": "paragraph",
          "text": "`multi-user.target` обычно соответствует многопользовательской системе без GUI. `graphical.target` обычно включает многопользовательскую систему и графическую среду. `rescue.target` — режим обслуживания, `emergency.target` — более минимальное окружение."
        },
        {
          "kind": "paragraph",
          "text": "**isolate** меняет текущий набор активных units и может остановить графическую сессию. **set-default** меняет target последующих загрузок. Это разные действия. Команды переключения из Assignment-5 выполняют только в учебной VM, понимая, что сессия может прерваться."
        },
        {
          "kind": "paragraph",
          "text": "Исторические runlevels: 0 halt/poweroff, 1 rescue/single-user, 3 обычно multi-user text, 5 обычно graphical, 6 reboot. Соответствия 2–5 зависят от дистрибутива; у systemd targets шире простой шкалы чисел."
        },
        {
          "kind": "heading",
          "text": "5 · at и cron"
        },
        {
          "kind": "paragraph",
          "text": "Здесь scheduling означает запуск команды по времени. Это не то же самое, что выбор следующего процесса CPU scheduler."
        },
        {
          "kind": "paragraph",
          "text": "EN: At schedules a one-time job. Cron runs recurring jobs according to a time pattern."
        },
        {
          "kind": "code",
          "text": "at now + 5 minutes\n# type a command at the at> prompt, finish input with Ctrl+D\natq                     # queued at jobs\natrm JOB_NUMBER         # remove a queued job\ncrontab -l              # list your recurring jobs\ncrontab -e              # edit your recurring jobs"
        },
        {
          "kind": "heading",
          "text": "Пять полей пользовательского crontab"
        },
        {
          "kind": "paragraph",
          "text": "**minute hour day-of-month month day-of-week command**"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Поле",
              "Обычный диапазон"
            ],
            [
              "Minute",
              "0–59"
            ],
            [
              "Hour",
              "0–23"
            ],
            [
              "Day of month",
              "1–31"
            ],
            [
              "Month",
              "1–12"
            ],
            [
              "Day of week",
              "0–7, Sunday = 0 или 7"
            ]
          ]
        },
        {
          "kind": "code",
          "text": "*/2 * * * * /usr/bin/date >> /home/student/cron_test.txt\n30 8 * * * /home/student/backup.sh\n0 9 * * 1 /home/student/weekly_report.sh"
        },
        {
          "kind": "paragraph",
          "text": "Первое: на минутах 0, 2, 4… каждого часа. Второе: ежедневно в 08:30. Третье: по понедельникам в 09:00. Время интерпретируется в настроенном для cron часовом поясе."
        },
        {
          "kind": "paragraph",
          "text": "`*` — любое разрешённое значение; `*/n` — шаг; `1,3,5` — список; `1-5` — диапазон. В системном `/etc/crontab` есть дополнительное поле пользователя; в `crontab -e` его обычно нет."
        },
        {
          "kind": "paragraph",
          "text": "**Практическая ловушка:** cron не воспроизводит всё интерактивное окружение. Используй абсолютные пути и перенаправляй вывод/ошибки. Если day-of-month и day-of-week оба ограничены, в распространённом cron совпадение любого из них может запустить задачу; не читай это как обязательный AND."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=86102"
    },
    {
      "id": 6,
      "name": "Services & Bash",
      "title": "Automate the system",
      "group": "System management",
      "description": "Systemd, custom services, conditions, loops and functions.",
      "blocks": [
        {
          "kind": "heading",
          "text": "6 · Управление службами"
        },
        {
          "kind": "paragraph",
          "text": "Service — управляемая фоновая функция, например SSH server. Daemon — фоновый процесс, реализующий такую работу. systemd — system and service manager; systemctl — инструмент управления им."
        },
        {
          "kind": "paragraph",
          "text": "EN: A service is a managed background function. A daemon is a background process. Systemctl controls systemd units; it is not the service manager itself."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Команда",
              "Смысл"
            ],
            [
              "`systemctl status ssh`",
              "Состояние и краткие диагностические сведения"
            ],
            [
              "`sudo systemctl start ssh`",
              "Запустить сейчас"
            ],
            [
              "`sudo systemctl stop ssh`",
              "Остановить сейчас"
            ],
            [
              "`sudo systemctl restart ssh`",
              "Остановить и запустить снова"
            ],
            [
              "`sudo systemctl reload ssh`",
              "Перечитать конфигурацию, если служба поддерживает"
            ],
            [
              "`sudo systemctl enable ssh`",
              "Настроить включение через зависимости/автозапуск"
            ],
            [
              "`sudo systemctl disable ssh`",
              "Убрать настройку enable, не обязательно остановить"
            ],
            [
              "`sudo systemctl enable --now ssh`",
              "Включить автозапуск и запустить сейчас"
            ],
            [
              "`journalctl -u ssh -b`",
              "Journal службы в текущей загрузке"
            ]
          ]
        },
        {
          "kind": "heading",
          "text": "Две независимые характеристики"
        },
        {
          "kind": "paragraph",
          "text": "**Active/inactive/failed** описывают текущее состояние. **Enabled/disabled/masked** относятся к установке и возможности активации. Служба может быть active и disabled или inactive и enabled."
        },
        {
          "kind": "paragraph",
          "text": "EN: Enabling a service does not by itself start it. Disabling it does not by itself stop it. A masked unit cannot be activated until it is unmasked. [R3]"
        },
        {
          "kind": "paragraph",
          "text": "`systemctl is-active ssh` отвечает про работу сейчас. `systemctl is-enabled ssh` — про enablement. `systemctl list-units --type=service` показывает обычно активные загруженные service units; добавь `--all` для неактивных загруженных. `list-unit-files --type=service` показывает установленные unit files и enablement."
        },
        {
          "kind": "paragraph",
          "text": "**Не все службы стартуют при boot:** возможны запуск вручную, зависимостями, socket activation и другие события. Служба типа oneshot может корректно завершиться; отсутствие постоянно работающего процесса само по себе не ошибка."
        },
        {
          "kind": "heading",
          "text": "6 · Свой systemd service: понять файл"
        },
        {
          "kind": "paragraph",
          "text": "System service обычно настраивают в `/etc/systemd/system/`. User service — в `~/.config/systemd/user/`, управляют через `systemctl --user`. User manager связан с пользовательским сеансом; linger может продлить его жизнь после logout, но не создаёт графическую сессию для GUI-приложений."
        },
        {
          "kind": "paragraph",
          "text": "EN: A unit file describes how systemd should manage a resource. Service units define the process to start and its lifecycle behavior."
        },
        {
          "kind": "paragraph",
          "text": "Ниже учебный user service. Сначала должен существовать исполняемый `/home/student/bin/os-status.sh`; замени путь на свой. Скрипт может выводить `date` и `uptime`."
        },
        {
          "kind": "code",
          "text": "[Unit]\nDescription=Print a short OS status report\n\n[Service]\nType=oneshot\nExecStart=/home/student/bin/os-status.sh\n\n[Install]\nWantedBy=default.target"
        },
        {
          "kind": "paragraph",
          "text": "Сохрани как `~/.config/systemd/user/os-status.service`."
        },
        {
          "kind": "code",
          "text": "systemctl --user daemon-reload\nsystemctl --user start os-status.service\nsystemctl --user status os-status.service\njournalctl --user -u os-status.service --no-pager"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Строка",
              "Значение"
            ],
            [
              "`[Unit]`",
              "Описание и связи unit"
            ],
            [
              "`Type=oneshot`",
              "Команда выполняет задачу и завершается"
            ],
            [
              "`ExecStart=`",
              "Какая команда запускается"
            ],
            [
              "`[Install]` / `WantedBy=`",
              "Связь, которую создаёт enable"
            ],
            [
              "`daemon-reload`",
              "Перечитать unit files после их изменения"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**reload ≠ daemon-reload:** первое относится к конфигурации самой службы, второе — к определениям units, которые читает systemd. В `ExecStart=` нет обычной интерактивной обработки shell: pipe и `>` не работают как в Bash без явного запуска shell. [R3]"
        },
        {
          "kind": "heading",
          "text": "6 · Bash: переменные и условия"
        },
        {
          "kind": "paragraph",
          "text": "Script — файл с последовательностью команд. Shebang `#!/bin/bash` указывает интерпретатор при прямом запуске. Расширение `.sh` удобно для человека, но не обязательно для исполнения."
        },
        {
          "kind": "paragraph",
          "text": "EN: A Bash script automates commands and control flow. The shebang selects the interpreter when the file is executed directly."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nread -r -p \"File path: \" path\nif [ -f \"$path\" ]; then\n    echo \"A regular file exists.\"\n    stat -- \"$path\"\nelse\n    echo \"No regular file at this path.\"\nfi"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Проверка",
              "Значение"
            ],
            [
              "`[ -e \"$p\" ]`",
              "Объект существует; разыменовывает symlink"
            ],
            [
              "`[ -f \"$p\" ]`",
              "Обычный файл"
            ],
            [
              "`[ -d \"$p\" ]`",
              "Каталог"
            ],
            [
              "`[ -r \"$p\" ]` / `[ -w \"$p\" ]`",
              "Читаем / доступен для записи текущему процессу"
            ],
            [
              "`[ -x \"$p\" ]`",
              "Выполним/доступен для search текущему процессу"
            ],
            [
              "`[ -z \"$s\" ]` / `[ -n \"$s\" ]`",
              "Строка пустая / непустая"
            ],
            [
              "`[ \"$a\" -gt \"$b\" ]`",
              "a больше b, целочисленное сравнение"
            ],
            [
              "`-eq`, `-ne`, `-lt`, `-le`, `-ge`",
              "=, ≠, <, ≤, ≥ для целых чисел"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Запуск: `chmod u+x check.sh`, затем `./check.sh`. Либо `bash check.sh`: тогда нужен доступ на чтение, а execute bit скрипта не требуется. `./` указывает текущий каталог, который обычно не входит в PATH."
        },
        {
          "kind": "paragraph",
          "text": "**Пробелы в `[ ... ]` обязательны:** это команда с аргументами. `x=5` — присваивание; `x = 5` — попытка выполнить команду `x`. `sum=$((10 + 25))` даёт 35. Успешная команда возвращает exit status 0; `$?` показывает статус последней команды."
        },
        {
          "kind": "paragraph",
          "text": "`[ -x file ]` не спрашивает исключительно про owner execute bit. Для проверки именно mode bit владельца нужно анализировать mode отдельно, например через `stat`."
        },
        {
          "kind": "heading",
          "text": "6 · Циклы, функции и параметры"
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\ngreet() {\n    echo \"Hello, $1!\"\n}\ngreet Maussym\n\nfor n in 1 2 3; do\n    echo \"Number $n\"\ndone\n\ncount=1\nwhile [ \"$count\" -le 3 ]; do\n    echo \"Count $count\"\n    count=$((count + 1))\ndone"
        },
        {
          "kind": "paragraph",
          "text": "`for` берёт каждое значение списка. `while` повторяет тело, пока проверка успешна. Переменная должна изменяться, иначе цикл может не завершиться. В обоих циклах выше будут напечатаны 1, 2, 3."
        },
        {
          "kind": "paragraph",
          "text": "EN: A for loop iterates over a list. A while loop repeats while its condition succeeds. A function groups reusable commands and receives positional parameters."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Параметр",
              "Смысл"
            ],
            [
              "`$0`",
              "Имя запускаемого скрипта"
            ],
            [
              "`$1`, `$2`",
              "Первый и второй аргументы; в функции — аргументы функции"
            ],
            [
              "`$#`",
              "Количество позиционных аргументов"
            ],
            [
              "`\"$@\"`",
              "Все аргументы с сохранением отдельных границ"
            ],
            [
              "`$$` / `$!`",
              "PID shell / PID последней background-команды"
            ],
            [
              "`$?`",
              "Exit status последней команды"
            ]
          ]
        },
        {
          "kind": "heading",
          "text": "Пример: безопасно показать переданные файлы"
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nfor path in \"$@\"; do\n    if [ -f \"$path\" ]; then\n        printf '%s\\n' \"$path\"\n    fi\ndone"
        },
        {
          "kind": "paragraph",
          "text": "При `bash list-files.sh \"my notes.txt\" absent.txt` имя с пробелом остаётся одним аргументом. Кавычки — часть логики корректной обработки имён, а не просто оформление."
        },
        {
          "kind": "paragraph",
          "text": "Для отладки: `bash -n script.sh` проверяет синтаксис без исполнения; `bash -x script.sh` исполняет и показывает шаги. Второе используй, понимая действия скрипта."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=90850"
    },
    {
      "id": 7,
      "name": "I/O & scheduling",
      "title": "From a request to the device",
      "group": "Storage",
      "description": "Drivers, caching, I/O monitoring and disk schedulers.",
      "blocks": [
        {
          "kind": "heading",
          "text": "7 · I/O: как данные доходят до устройства"
        },
        {
          "kind": "paragraph",
          "text": "I/O management организует передачу между программами и устройствами: диском, terminal, USB и сетью. Файловые дескрипторы дают единый способ обращаться ко многим объектам, хотя конкретные устройства имеют ограничения и дополнительные операции."
        },
        {
          "kind": "paragraph",
          "text": "EN: The I/O subsystem provides common interfaces, buffering, protection and device-specific control. Device drivers translate generic requests into hardware-specific operations."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Уровень",
              "Пример",
              "Что делает"
            ],
            [
              "User program / library",
              "cat, fopen",
              "Формирует запрос приложения"
            ],
            [
              "System calls",
              "open, read, write, close",
              "Контролируемый вход в ядро"
            ],
            [
              "Device-independent I/O",
              "Имена, защита, buffering",
              "Общая логика для устройств"
            ],
            [
              "Device driver",
              "Драйвер disk/terminal",
              "Команды конкретному устройству"
            ],
            [
              "Controller / hardware",
              "SSD, keyboard",
              "Реальная передача данных"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**Buffering** временно удерживает данные, сглаживая разницу скоростей или размеров передач. **Caching** сохраняет копии для повторного использования. **Interrupt** сообщает CPU о событии. **DMA** позволяет устройству/контроллеру передавать данные в RAM без копирования каждого слова инструкциями CPU; CPU всё равно настраивает и контролирует операцию."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Что узнать",
              "Команда"
            ],
            [
              "CPU и disk statistics",
              "`iostat -dx 2 3`"
            ],
            [
              "I/O по процессам",
              "`sudo iotop`"
            ],
            [
              "Память, CPU, I/O",
              "`vmstat 2 5`"
            ],
            [
              "Сообщения kernel",
              "`dmesg | tail`"
            ],
            [
              "Открытые файлы процесса",
              "`lsof -p PID`"
            ],
            [
              "Процесс на порту 80",
              "`sudo lsof -i :80`"
            ],
            [
              "Диски и разделы",
              "`lsblk -f`"
            ],
            [
              "Занятое место FS / каталога",
              "`df -h` / `du -sh /var/log`"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**Ловушка:** `df` и `du` измеряют разные вещи. Удалённый файл может продолжать занимать место, пока его держит открытым процесс. `lsof /home/user` не означает рекурсивный поиск всех открытых файлов внутри дерева каталога."
        },
        {
          "kind": "heading",
          "text": "7 · Планирование дискового I/O"
        },
        {
          "kind": "paragraph",
          "text": "На HDD перемещение головки и ожидание вращения стоят времени. Планировщик может переупорядочить запросы, чтобы уменьшить задержку и обеспечить справедливость. SSD/NVMe не имеют механического seek, но порядок и очереди всё равно влияют на latency и throughput."
        },
        {
          "kind": "paragraph",
          "text": "EN: Disk scheduling selects the order of I/O requests. Its goals include throughput, latency and fairness; the best policy depends on the device and workload."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Linux scheduler из Lecture-7",
              "Идея"
            ],
            [
              "mq-deadline",
              "Сроки обслуживания запросов помогают ограничивать ожидание"
            ],
            [
              "BFQ",
              "Распределяет бюджеты обслуживания между потребителями"
            ],
            [
              "none",
              "Минимальное переупорядочение на этом уровне, опора на устройство"
            ],
            [
              "Kyber",
              "Управляет очередями с ориентацией на целевую latency"
            ]
          ]
        },
        {
          "kind": "code",
          "text": "lsblk -o NAME,SIZE,SCHED\ncat /sys/block/sda/queue/scheduler\n# The selected scheduler appears in [brackets]."
        },
        {
          "kind": "paragraph",
          "text": "Набор и default зависят от ядра, устройства и настроек. `noop` — название старого single-queue scheduler; его не следует безоговорочно считать тем же самым, что современный `none`. Строка в `/sys` изменяет текущую настройку, но не гарантирует сохранение после reboot."
        },
        {
          "kind": "heading",
          "text": "Классические алгоритмы: дополнение по учебнику, глава 5"
        },
        {
          "kind": "paragraph",
          "text": "FCFS обслуживает по поступлению; SSTF выбирает ближайший цилиндр и может допускать starvation; SCAN движется до края и разворачивается; LOOK разворачивается на последнем запросе текущего направления. C-SCAN и C-LOOK обслуживают в одном направлении с возвратом."
        },
        {
          "kind": "paragraph",
          "text": "**Пример:** head=50, очередь 10, 70, 20, 80; новых запросов нет."
        },
        {
          "kind": "bullet",
          "text": "FCFS: 50→10→70→20→80. Движение = 40+60+50+60 = **210**."
        },
        {
          "kind": "bullet",
          "text": "SSTF: 50→70→80→20→10. Движение = 20+10+60+10 = **100**."
        },
        {
          "kind": "paragraph",
          "text": "Если просят SCAN/LOOK, сначала нужны направление движения и, для SCAN, границы диска. При равных расстояниях SSTF нужна договорённость о tie-breaking. Эти расчёты — учебное дополнение, не опубликованный sample Final."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=92858"
    },
    {
      "id": 8,
      "name": "Filesystems & users",
      "title": "Organize storage and identities",
      "group": "Administration",
      "description": "Mounts, filesystem hierarchy, accounts and groups.",
      "blocks": [
        {
          "kind": "heading",
          "text": "8 · Файловые системы и mount"
        },
        {
          "kind": "paragraph",
          "text": "Filesystem определяет организацию файлов, каталогов, метаданных и размещения данных. Partition — часть блочного устройства. Mount point — каталог, через который содержимое файловой системы включается в общее дерево `/`."
        },
        {
          "kind": "paragraph",
          "text": "EN: Mounting attaches a filesystem to a directory in the existing namespace. It does not copy the files into that directory."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Термин / FS",
              "Ключевая идея"
            ],
            [
              "ext4",
              "Linux filesystem с journaling; широко используется"
            ],
            [
              "XFS",
              "Файловая система, рассчитанная на масштабируемую работу"
            ],
            [
              "Btrfs",
              "Copy-on-write, snapshots и дополнительные возможности"
            ],
            [
              "SquashFS",
              "Сжатая read-only filesystem, например в Snap images"
            ],
            [
              "tmpfs",
              "Временная memory-backed filesystem; может использовать swap"
            ],
            [
              "Loop device",
              "Представляет файл как блочное устройство"
            ],
            [
              "UUID",
              "Устойчивый идентификатор, применяемый для FS/томов"
            ],
            [
              "VFS",
              "Общая абстракция файловых систем в Linux"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Не путай filesystem UUID и PARTUUID: это идентификаторы разных уровней. Clone образа может скопировать UUID, поэтому слово «unique» не заменяет проверку реальной конфигурации."
        },
        {
          "kind": "code",
          "text": "lsblk -f\ndf -hT\nfindmnt\nsudo blkid\ncat /etc/fstab"
        },
        {
          "kind": "heading",
          "text": "Логика подключения учебного диска"
        },
        {
          "kind": "bullet",
          "text": "Через `lsblk -f` определи нужный раздел и тип FS."
        },
        {
          "kind": "bullet",
          "text": "Создай существующий mount point, например `/mnt/usb`."
        },
        {
          "kind": "bullet",
          "text": "`sudo mount /dev/sdb1 /mnt/usb` подключает выбранный раздел."
        },
        {
          "kind": "bullet",
          "text": "Используй файлы через `/mnt/usb`; затем `sudo umount /mnt/usb`."
        },
        {
          "kind": "paragraph",
          "text": "Имя `/dev/sdb1` — пример, а не универсальный адрес флешки. Если mount point занят, проверь `pwd`, открытые файлы и процессы. **Mount ≠ format:** `mkfs` создаёт новую FS и может уничтожить существующие данные. В учебных задачах используй только выделенный виртуальный диск."
        },
        {
          "kind": "heading",
          "text": "8–9 · Дерево каталогов и типы файлов"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Каталог",
              "Смысл",
              "English cue"
            ],
            [
              "`/`",
              "Корень всего дерева",
              "Filesystem root"
            ],
            [
              "`/root`",
              "Home пользователя root",
              "Root user's home"
            ],
            [
              "`/home`",
              "Домашние каталоги обычных пользователей",
              "User homes"
            ],
            [
              "`/etc`",
              "Системная конфигурация",
              "Configuration"
            ],
            [
              "`/var`",
              "Изменяемые данные",
              "Variable data"
            ],
            [
              "`/var/log`",
              "Системные журналы",
              "Logs"
            ],
            [
              "`/tmp`",
              "Временные файлы",
              "Temporary files"
            ],
            [
              "`/dev`",
              "Представления устройств и pseudo-devices",
              "Device nodes"
            ],
            [
              "`/proc`",
              "Виртуальные сведения о процессах и kernel",
              "Process/kernel information"
            ],
            [
              "`/sys`",
              "Сведения и интерфейсы устройств/kernel",
              "Device/kernel interfaces"
            ],
            [
              "`/run`",
              "Runtime data текущей загрузки",
              "Runtime state"
            ],
            [
              "`/boot`",
              "Файлы загрузки",
              "Boot files"
            ],
            [
              "`/usr`",
              "Большая часть установленных программ и библиотек",
              "Installed software"
            ],
            [
              "`/bin`, `/sbin`, `/lib`",
              "Основные команды/библиотеки; часто ссылки в `/usr`",
              "Binaries and libraries"
            ],
            [
              "`/opt`, `/srv`",
              "Дополнительное ПО / данные служб",
              "Optional software / service data"
            ],
            [
              "`/mnt`, `/media`",
              "Точки монтирования",
              "Mount locations"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "EN: Linux exposes many resources through file-like interfaces. Virtual filesystems such as procfs and sysfs present kernel information rather than ordinary persistent disk files."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Первый символ `ls -l`",
              "Тип",
              "Пример"
            ],
            [
              "`-` / `d`",
              "Обычный файл / каталог",
              "notes.txt / Documents"
            ],
            [
              "`l`",
              "Symbolic link",
              "shortcut → target"
            ],
            [
              "`b` / `c`",
              "Block / character device",
              "/dev/sda / /dev/tty"
            ],
            [
              "`p` / `s`",
              "FIFO named pipe / socket",
              "Объекты IPC"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "**Устройства:** `/dev/null` отбрасывает записанное и даёт EOF при чтении; `/dev/zero` выдаёт нулевые байты. Файл `/proc/PID/...` относится к процессу с данным PID и может исчезнуть, когда тот завершится. `/tmp` не гарантирует хранение между загрузками."
        },
        {
          "kind": "heading",
          "text": "8 · Пользователи и группы"
        },
        {
          "kind": "paragraph",
          "text": "Каждый пользователь имеет UID и primary GID. Supplementary groups добавляют другие групповые членства. У файла есть один owner UID и один owning group GID; дополнительные индивидуальные разрешения можно описать ACL."
        },
        {
          "kind": "paragraph",
          "text": "EN: A primary group is the user's default group. Supplementary groups provide additional memberships. File ownership and group membership are distinct concepts."
        },
        {
          "kind": "code",
          "text": "sudo adduser alex\nsudo groupadd research\nsudo usermod -aG research alex\nid alex\ngroups alex\ngetent group research\nsudo usermod -g research alex\nsudo usermod -s /bin/sh alex"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Команда / файл",
              "Что помнить"
            ],
            [
              "`adduser`",
              "Удобная Ubuntu/Debian-обёртка с интерактивной настройкой"
            ],
            [
              "`useradd -m user`",
              "Низкоуровневое создание с home; defaults зависят от настроек"
            ],
            [
              "`passwd user`",
              "Установить/сменить пароль"
            ],
            [
              "`usermod -aG group user`",
              "Добавить supplementary group, сохраняя остальные"
            ],
            [
              "`usermod -G ... user`",
              "Задать список supplementary groups; может убрать прежние"
            ],
            [
              "`usermod -g group user`",
              "Изменить primary group"
            ],
            [
              "`su - user`",
              "Перейти в login environment другого пользователя"
            ],
            [
              "`/etc/passwd`",
              "Имя, UID, GID, home, shell и другие поля учётной записи"
            ],
            [
              "`/etc/shadow`",
              "Защищённые password hashes и параметры aging"
            ],
            [
              "`/etc/group`",
              "Сведения о группах и явных дополнительных членствах"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Assignment-6: alex и nina входят в research, omar — в research и support; primary group nina = research. Проверяй через `id` и `groups`, а не только чтением `/etc/group`: primary membership не обязано быть перечислено в списке членов там."
        },
        {
          "kind": "paragraph",
          "text": "Для expiry используют `chage -E YYYY-MM-DD user` или соответствующий параметр usermod. Это дата окончания действия account, а не то же самое, что срок пароля. Уже запущенные сеансы обычно не получают новые supplementary groups автоматически: нужен новый login/сеанс с обновлёнными credentials."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=92859"
    },
    {
      "id": 9,
      "name": "Access & links",
      "title": "Understand who can do what",
      "group": "Administration",
      "description": "ACL, special bits, hidden files, hard links and symlinks.",
      "blocks": [
        {
          "kind": "heading",
          "text": "9 · Модели доступа и ACL"
        },
        {
          "kind": "paragraph",
          "text": "Authentication отвечает «кто ты?», authorization — «что тебе разрешено?». Basic Unix permissions выбирают права owner, group или others; это не сложение всех трёх классов для одного доступа."
        },
        {
          "kind": "paragraph",
          "text": "EN: Authentication establishes identity. Authorization decides which operations that identity may perform on a resource."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Модель",
              "Логика",
              "English description"
            ],
            [
              "User-based / identity-based",
              "Правила связаны с конкретной учётной записью",
              "Permissions are tied to a user's identity."
            ],
            [
              "ACL",
              "У объекта список правил для пользователей/групп",
              "Per-object access entries for named subjects."
            ],
            [
              "RBAC",
              "Разрешения назначаются роли, пользователю — роль",
              "Users obtain permissions through roles."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Это способы описания и организации доступа, а не полностью взаимоисключающие механизмы. В Linux используются mode bits, ACL и другие механизмы защиты; группа сама по себе не равна полноценной системе RBAC."
        },
        {
          "kind": "code",
          "text": "getfacl project\nsetfacl -m u:alex:rw- notes.txt\nsetfacl -m g:research:rwx project\nsetfacl -d -m g:research:rwx project\nsetfacl -x g:research project"
        },
        {
          "kind": "paragraph",
          "text": "`-m` изменяет/добавляет entry; `-x` удаляет указанную entry; `-d` работает с default ACL каталога. Default ACL задаёт наследование для новых объектов; не меняет задним числом уже существующие файлы."
        },
        {
          "kind": "heading",
          "text": "Mask ограничивает effective permissions"
        },
        {
          "kind": "paragraph",
          "text": "Если named user entry = `rwx`, а mask = `r-x`, эффективные права этого named user — `r-x`. Mask ограничивает named-user entries и group class; owner entry и others entry ею не ограничиваются."
        },
        {
          "kind": "paragraph",
          "text": "EN: An ACL entry may grant more permissions than are effective. The ACL mask limits permissions for the group class, including named users and groups."
        },
        {
          "kind": "paragraph",
          "text": "`ls -l` с `+` после mode часто указывает на расширенную ACL. При extended ACL видимые group bits представляют mask, поэтому для подробностей смотри `getfacl`. Унаследованная default ACL также ограничивается mode, с которым программа создаёт объект: обычный файл не обязан стать executable."
        },
        {
          "kind": "heading",
          "text": "9 · Скрытые файлы, links и special bits"
        },
        {
          "kind": "paragraph",
          "text": "Имя с точкой в начале обычно скрывается от обычного `ls`: `.bashrc`, `.config`. Это соглашение отображения, а не защита. `ls -a` включает также `.` и `..`; `ls -A` показывает скрытые элементы без этих двух записей."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Свойство",
              "Hard link",
              "Symbolic link"
            ],
            [
              "Что хранится",
              "Ещё одно имя того же inode",
              "Путь к target; отдельный inode"
            ],
            [
              "Команда",
              "`ln original.txt hard.txt`",
              "`ln -s original.txt soft.txt`"
            ],
            [
              "После удаления original name",
              "Данные доступны через hard.txt",
              "Обычно dangling link, если этот target path исчез"
            ],
            [
              "Между разными filesystems",
              "Обычно нельзя",
              "Можно"
            ],
            [
              "Ссылка на каталог",
              "Обычно запрещена для пользователя",
              "Можно"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "EN: A hard link is another directory entry for the same file. A symbolic link stores a target pathname and can become dangling when that pathname no longer resolves."
        },
        {
          "kind": "paragraph",
          "text": "Изменение original file через запись в тот же inode видно через hard link. Если редактор заменяет файл новым inode, поведение может отличаться. Удаление имени не уничтожает данные, пока остаются hard links или открытые references. Относительный target symlink отсчитывается от каталога самой ссылки."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Special bit",
              "Число",
              "Главный смысл"
            ],
            [
              "setuid",
              "4000",
              "Для executable: выполнение с effective UID владельца, с ограничениями ОС"
            ],
            [
              "setgid",
              "2000",
              "Для каталога: новые объекты наследуют его группу"
            ],
            [
              "sticky",
              "1000",
              "Для общего каталога: ограничивает удаление/переименование чужих записей"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "`chmod 2770 project` = setgid + rwxrwx---. `chmod 1777 shared` = sticky + rwxrwxrwx. В sticky directory удалить запись обычно могут владелец файла, владелец каталога или привилегированный пользователь; точнее, чем «только owner файла»."
        },
        {
          "kind": "paragraph",
          "text": "**umask:** убирает permission bits из запрошенного режима. При usual requested 666 для файла и 777 для каталога, umask 022 даёт 644 и 755. Это битовая маска, а не обычное арифметическое вычитание; default ACL может изменить процесс вычисления итоговых прав."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=96179"
    },
    {
      "id": 10,
      "name": "Syllabus & revision",
      "title": "Connect the remaining concepts",
      "group": "Review · not Lecture 10",
      "description": "Threads, memory, paging, calculation practice and exam traps.",
      "blocks": [
        {
          "kind": "heading",
          "text": "Силлабус · Потоки и синхронизация"
        },
        {
          "kind": "paragraph",
          "text": "Эти понятия заявлены в силлабусе; отдельного подробного слайда о них в загруженных лекциях нет. Это краткое дополнение по учебнику, глава 2."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Понятие",
              "Простая логика",
              "English description"
            ],
            [
              "Process",
              "Контейнер ресурсов и адресного пространства",
              "An executing program with an address space and OS resources."
            ],
            [
              "Thread",
              "Поток исполнения внутри процесса",
              "An execution path with its own registers and stack."
            ],
            [
              "IPC",
              "Как процессы обмениваются данными",
              "Inter-process communication, e.g. pipes, sockets, shared memory."
            ],
            [
              "Race condition",
              "Результат зависит от порядка одновременных действий",
              "Correctness depends on timing or interleaving."
            ],
            [
              "Critical section",
              "Код, который обращается к общему ресурсу",
              "Code accessing shared state that needs protection."
            ],
            [
              "Mutex",
              "Вход в защищённый участок по одному",
              "A mutual-exclusion lock."
            ],
            [
              "Semaphore",
              "Счётчик доступных разрешений",
              "A synchronization object with wait/post operations."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Потоки одного процесса обычно разделяют код, данные и открытые файлы, но имеют отдельные стеки и регистры. Разные процессы обычно имеют отдельные виртуальные адресные пространства; shared memory создают явно."
        },
        {
          "kind": "heading",
          "text": "Почему `counter++` может потерять обновление"
        },
        {
          "kind": "paragraph",
          "text": "Пусть counter=0. Поток A читает 0. Поток B читает 0. A вычисляет и записывает 1. B тоже записывает 1. Итог 1 вместо 2: операция состоит из нескольких шагов. Mutex вокруг чтения-изменения-записи делает этот участок взаимно исключающим."
        },
        {
          "kind": "paragraph",
          "text": "EN: Mutual exclusion prevents simultaneous execution of a protected critical section. It does not automatically solve every synchronization or ordering problem."
        },
        {
          "kind": "paragraph",
          "text": "**Deadlock:** задачи ждут ресурсы друг друга и не продвигаются. Четыре необходимые условия классической модели: mutual exclusion, hold and wait, no preemption, circular wait. **Starvation:** конкретная задача постоянно не получает нужный ресурс, хотя другие продвигаются."
        },
        {
          "kind": "paragraph",
          "text": "**Context switch:** ОС сохраняет состояние одной задачи и восстанавливает другой. Это накладная работа, а не полезное выполнение пользовательского алгоритма. Одновременное продвижение задач (concurrency) возможно и на одном ядре; parallelism требует реально одновременного выполнения."
        },
        {
          "kind": "heading",
          "text": "Силлабус · Иерархия памяти и paging"
        },
        {
          "kind": "paragraph",
          "text": "Дополнение к Week 5–6 по силлабусу и главе 3 учебника. В опубликованном Lecture-6 основной акцент на службах и Bash, поэтому память разобрана здесь отдельно."
        },
        {
          "kind": "paragraph",
          "text": "**Общая иерархия:** registers → CPU caches → RAM → SSD/HDD. Ближе к CPU обычно меньше ёмкость и ниже latency; накопитель обеспечивает долговременное хранение. RAM volatile: данные не сохраняются при отключении питания."
        },
        {
          "kind": "paragraph",
          "text": "EN: Virtual memory gives a process a virtual address space. The OS and hardware translate virtual addresses to physical memory and enforce access permissions."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Термин",
              "Что означает"
            ],
            [
              "Page",
              "Фиксированный блок виртуального адресного пространства"
            ],
            [
              "Frame",
              "Блок физической RAM того же размера"
            ],
            [
              "Page table",
              "Отображение виртуальных страниц на physical frames и атрибуты"
            ],
            [
              "MMU",
              "Аппаратная трансляция и проверка адресов"
            ],
            [
              "TLB",
              "Кэш недавних трансляций адресов"
            ],
            [
              "Page fault",
              "Обращение требует обработки исключения ядром"
            ],
            [
              "Swap",
              "Хранилище для некоторых выгружаемых страниц памяти"
            ],
            [
              "Thrashing",
              "Слишком много времени тратится на перенос страниц"
            ]
          ]
        },
        {
          "kind": "heading",
          "text": "Вычисление адреса"
        },
        {
          "kind": "paragraph",
          "text": "Размер page = 4096 bytes. Virtual address = 13 000. Делим: 13 000 = 3 × 4096 + 712. Значит, **page number = 3**, **offset = 712**. Если page table отображает page 3 в frame 9, physical address = 9 × 4096 + 712 = **37 576**."
        },
        {
          "kind": "paragraph",
          "text": "Смещение сохраняется; меняется номер блока. Для page 4096 = 2^12 нижние 12 бит адреса задают offset. Последняя страница может быть заполнена не полностью: это internal fragmentation."
        },
        {
          "kind": "paragraph",
          "text": "**Ловушки:** virtual memory не равна swap. Page fault не всегда означает чтение с диска: возможны выделение нулевой страницы, copy-on-write и другие случаи. Некорректный адрес также может привести к fault, который нельзя исправить для процесса."
        },
        {
          "kind": "paragraph",
          "text": "Проверка в Linux: `free -h`, `cat /proc/meminfo`, `vmstat 2 5`. Низкое значение free RAM само по себе не означает нехватку: часть памяти может использоваться как освобождаемый cache; смотри также available."
        },
        {
          "kind": "heading",
          "text": "Силлабус · Android и power management"
        },
        {
          "kind": "paragraph",
          "text": "В подробном плане самостоятельной работы дополнительно названы Android File System и управление энергопотреблением внешних устройств. В опубликованных слайдах эти пункты подробно не раскрыты; ниже — краткое дополнение по официальной документации [R4–R6]."
        },
        {
          "kind": "heading",
          "text": "Android: те же базовые идеи, другая платформа"
        },
        {
          "kind": "paragraph",
          "text": "Android использует Linux kernel. Данные приложений изолируются с помощью application sandbox и механизмов ОС; наличие файлового пути не означает, что любое приложение может его прочитать. Для file-based encryption в AOSP применяется fscrypt, поддерживаемый ext4 и F2FS. Конкретная файловая система зависит от устройства и раздела."
        },
        {
          "kind": "paragraph",
          "text": "EN: Android builds on the Linux kernel and isolates applications through a sandbox. File access is controlled; the filesystem type alone does not define the whole security model."
        },
        {
          "kind": "paragraph",
          "text": "Главная связь с нашим курсом: filesystem организует данные, UID и права ограничивают доступ, encryption защищает содержимое при соответствующих условиях доступа к ключам. Это разные задачи, которые работают вместе."
        },
        {
          "kind": "heading",
          "text": "Runtime power management"
        },
        {
          "kind": "paragraph",
          "text": "Устройство может переходить в состояние пониженного энергопотребления, пока вся система продолжает работать. Это runtime PM; system suspend относится ко всей системе. Поддержка зависит от оборудования, драйвера и конфигурации."
        },
        {
          "kind": "paragraph",
          "text": "EN: Runtime power management reduces an idle device's power use while the system remains operational. System-wide sleep and per-device runtime suspend are distinct mechanisms."
        },
        {
          "kind": "table",
          "rows": [
            [
              "Понятие",
              "Что помнить"
            ],
            [
              "Idle device",
              "Устройство сейчас не требуется активным потребителям"
            ],
            [
              "Autosuspend",
              "Отложенный переход в low-power state при выполнении условий"
            ],
            [
              "Resume",
              "Возврат устройства к работе перед нужной операцией"
            ],
            [
              "Driver callbacks",
              "Драйвер участвует в переходах suspend/resume"
            ],
            [
              "Latency / power trade-off",
              "Частые переходы экономят энергию, но могут добавлять задержки"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "В sysfs встречаются атрибуты `power/control` и `power/autosuspend_delay_ms`; их точный путь относится к конкретному устройству. Это интерфейс политики управления, а не обычный текстовый документ. Для экзамена важнее объяснить механизм и компромисс, чем менять параметры реального оборудования."
        },
        {
          "kind": "heading",
          "text": "Практика Week 2 · Теоретические вопросы"
        },
        {
          "kind": "heading",
          "text": "Семейство компьютеров"
        },
        {
          "kind": "paragraph",
          "text": "Идея computer family сохраняет совместимость интерфейсов и программ между моделями с разной производительностью. Она не исчезла с IBM System/360: современные архитектурные семейства тоже позволяют переносить software при соблюдении совместимости."
        },
        {
          "kind": "paragraph",
          "text": "EN: A computer family provides a compatible architecture across machines with different implementations or performance levels."
        },
        {
          "kind": "heading",
          "text": "Что должно быть привилегированным?"
        },
        {
          "kind": "paragraph",
          "text": "Из задания: disable all interrupts, read clock, set clock, change memory map. Отключение всех прерываний, изменение системного времени и защищённых отображений памяти должны контролироваться ядром. Чтение времени обычно может предоставляться приложению безопасно; наличие конкретной непривилегированной CPU instruction зависит от архитектуры."
        },
        {
          "kind": "paragraph",
          "text": "EN: Operations that can compromise isolation or system control must be privileged. Reading the time can be exposed safely, unlike arbitrary modification of system state."
        },
        {
          "kind": "heading",
          "text": "Trap instruction"
        },
        {
          "kind": "paragraph",
          "text": "Trap — синхронная передача управления обработчику из-за текущей инструкции. Механизм может использоваться для обращения к ОС; это отличается от асинхронного interrupt, вызванного внешним событием, например устройством."
        },
        {
          "kind": "paragraph",
          "text": "EN: A trap is synchronous with the executing instruction. A hardware interrupt is typically asynchronous to the current instruction stream."
        },
        {
          "kind": "heading",
          "text": "Должен ли write ждать завершения диска?"
        },
        {
          "kind": "paragraph",
          "text": "Зависит от контракта операции. При buffered I/O ядро может скопировать данные в собственный buffer/cache и вернуть управление раньше физической записи. Оно должно обеспечить корректное владение данными и обработку ошибок; возврат из write не равен гарантии долговременного сохранения. Для определённых требований durability нужны механизмы вроде fsync и подходящий протокол работы."
        },
        {
          "kind": "paragraph",
          "text": "EN: A buffered write may return before the data reaches persistent storage. Completion of write and durable storage are different guarantees."
        },
        {
          "kind": "heading",
          "text": "Геометрия диска из условия"
        },
        {
          "kind": "paragraph",
          "text": "Для одного head: 65 536 cylinders × 255 sectors/track × 512 bytes = **8 556 380 160 bytes**. Number of heads = total capacity / capacity per head. Если 255 GB в условии означает **255 GiB**, получается **32 heads**, при двух поверхностях на platter — **16 platters**. При десятичном 255 GB число heads нецелое: единицы или исходное условие требуют уточнения. Реальные современные накопители не следует описывать этой учебной геометрией буквально."
        },
        {
          "kind": "heading",
          "text": "Практика Week 2 · Как решать расчётные задачи"
        },
        {
          "kind": "heading",
          "text": "1. Bitmap screen: размер = ширина × высота × bits per pixel"
        },
        {
          "kind": "paragraph",
          "text": "Для 1200 × 900 при 24 bit/pixel: 1200 × 900 × 24 / 8 = **3 240 000 bytes**, около **3.09 MiB**. Это raw framebuffer без дополнительных buffers и служебных данных."
        },
        {
          "kind": "paragraph",
          "text": "Для экрана 25 × 80 получаем 2000 character cells. При одном байте на символ — 2000 bytes; с дополнительным attribute byte — 4000 bytes. **В условии нужно уточнить представление character cell.** При исторической цене $5 за KiB: примерно $9.77 / $19.53 соответственно и $15 820.31 для bitmap. Текущая цена RAM не вычисляется из условия: её нельзя выдавать за постоянный факт."
        },
        {
          "kind": "paragraph",
          "text": "EN: State the storage representation and unit convention before multiplying. KB and KiB are not interchangeable in a precise calculation."
        },
        {
          "kind": "heading",
          "text": "2. Pipeline: latency и throughput"
        },
        {
          "kind": "paragraph",
          "text": "Четыре стадии по 1 ns: первая инструкция проходит за **4 ns**. После заполнения идеальный pipeline завершает **одну инструкцию за 1 ns**, то есть **10^9 instructions/s**. Для N инструкций без stalls время = (N + 3) ns."
        },
        {
          "kind": "heading",
          "text": "3. Среднее время доступа"
        },
        {
          "kind": "paragraph",
          "text": "Cache hit=0.95, RAM hit после cache miss=0.99. Времена: cache 1 ns, RAM 10 ns, disk 10 ms = 10 000 000 ns."
        },
        {
          "kind": "paragraph",
          "text": "При последовательной проверке уровней: **E[T] = 1 + 0.05 × (10 + 0.01 × 10 000 000)** **= 1 + 0.5 + 5000 = 5001.5 ns ≈ 5.0015 µs.**"
        },
        {
          "kind": "paragraph",
          "text": "Даже редкое обращение к диску сильно увеличивает среднее. Если условие задаёт полные взаимоисключающие времена обслуживания вместо добавочных задержек, модель меняется; сначала сформулируй предположение."
        },
        {
          "kind": "heading",
          "text": "4. HDD access time"
        },
        {
          "kind": "paragraph",
          "text": "**T ≈ seek + rotational delay + transfer time.** Для 11 ms + 7 ms и 400 KB при 100 MB/s, с десятичными единицами transfer=4 ms, всего **22 ms**. Формулировка практики «400 KB from one sector» противоречит sector=512 bytes: 400 KB занимают много секторов. Не смешивай объём всего запроса и размер сектора."
        },
        {
          "kind": "paragraph",
          "text": "Задача про 2 CPU × 2 hardware threads тоже требует модели: logical threads не гарантируют удвоения CPU throughput. Без правил назначения и совместного исполнения единственного надёжного численного ответа нет."
        },
        {
          "kind": "heading",
          "text": "Быстрое повторение · Не перепутать"
        },
        {
          "kind": "table",
          "rows": [
            [
              "Вопрос в голове",
              "Корректная связь"
            ],
            [
              "OS / kernel / shell?",
              "OS шире ядра; shell интерпретирует команды"
            ],
            [
              "Program / process / thread?",
              "Файл инструкций / экземпляр исполнения / поток внутри process"
            ],
            [
              "Root / kernel mode?",
              "Учётная запись / режим выполнения CPU"
            ],
            [
              "`>` / `>>` / `|`?",
              "Заменить вывод в файле / добавить / передать следующей команде"
            ],
            [
              "`grep -c`?",
              "Число matching lines, не всех occurrences"
            ],
            [
              "Glob `*` / regex `*`?",
              "Любая последовательность имени / повтор предыдущего элемента"
            ],
            [
              "`rwx` в цифрах?",
              "4+2+1=7; no permissions=0"
            ],
            [
              "`chmod` / `chown`?",
              "Mode bits / owner и group"
            ],
            [
              "Можно удалить read-only file?",
              "Решают parent directory permissions и дополнительные ограничения"
            ],
            [
              "`start` / `enable`?",
              "Работа сейчас / настройка активации"
            ],
            [
              "`reload` / `daemon-reload`?",
              "Конфигурация службы / systemd unit files"
            ],
            [
              "Ctrl+C / Ctrl+Z?",
              "Обычно interrupt / suspend foreground process group"
            ],
            [
              "`kill` / `kill -9`?",
              "По умолчанию TERM / KILL"
            ],
            [
              "NI 10 → NI 15?",
              "Ниже относительный CPU priority"
            ],
            [
              "`at` / `cron`?",
              "Один раз / повторяющийся график"
            ],
            [
              "`df` / `du` / `lsblk`?",
              "Пространство FS / размеры объектов / block devices"
            ],
            [
              "Hard / soft link?",
              "Тот же inode / отдельный inode с target path"
            ],
            [
              "Hidden / protected?",
              "Точка скрывает в обычном listing, но не ограничивает доступ"
            ],
            [
              "Setgid / sticky?",
              "Наследование группы / ограничение удаления в каталоге"
            ],
            [
              "Virtual memory / swap?",
              "Абстракция адресного пространства / один механизм backing storage"
            ],
            [
              "Page fault / disk read?",
              "Fault требует kernel handling, но не всегда диска"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "EN: Explain the effect before naming the command. In an exam, identify what is being asked: current state, future startup, file contents, directory entries, identity, permissions, or resource usage."
        }
      ],
      "source": "https://lms.astanait.edu.kz/mod/resource/view.php?id=77399"
    }
  ],
  "cards": [
    {
      "id": 1,
      "week": 1,
      "front": "What are the two main roles of an OS?",
      "back": "Resource management and useful abstractions. RU: распределяет ресурсы и предоставляет приложениям удобные интерфейсы."
    },
    {
      "id": 2,
      "week": 1,
      "front": "Program vs process?",
      "back": "A program is stored instructions; a process is an executing instance. RU: файл программы и выполняющийся экземпляр."
    },
    {
      "id": 3,
      "week": 1,
      "front": "What does a system call do?",
      "back": "Requests a kernel service through a controlled interface. RU: контролируемый запрос приложения к ядру."
    },
    {
      "id": 4,
      "week": 1,
      "front": "Kernel mode vs root user?",
      "back": "A CPU execution mode vs a user identity. RU: root-программа обычно работает в user mode до обращения к ядру."
    },
    {
      "id": 5,
      "week": 2,
      "front": "Which command shows the kernel release?",
      "back": "uname -r. RU: uname сообщает о ядре; hostname показывает имя хоста."
    },
    {
      "id": 6,
      "week": 2,
      "front": "What is SSH for?",
      "back": "Encrypted remote login and command execution. RU: защищённый вход на удалённую машину."
    },
    {
      "id": 7,
      "week": 2,
      "front": "What is kept in known_hosts?",
      "back": "Accepted remote host public keys. RU: ключи хостов; authorized_keys служит для разрешения входа пользователей."
    },
    {
      "id": 8,
      "week": 2,
      "front": "Where are DNS search suffixes configured?",
      "back": "The search directive in /etc/resolv.conf; it may be generated by a resolver manager. RU: суффиксы поиска DNS."
    },
    {
      "id": 9,
      "week": 3,
      "front": "stdin, stdout, stderr numbers?",
      "back": "0, 1, 2. RU: ввод, обычный вывод, ошибки."
    },
    {
      "id": 10,
      "week": 3,
      "front": "What is the difference between > and >>?",
      "back": "Overwrite versus append. RU: заменить содержимое или дописать в конец."
    },
    {
      "id": 11,
      "week": 3,
      "front": "What does grep -c count?",
      "back": "Matching lines, not occurrences. RU: одна строка с тремя совпадениями считается один раз."
    },
    {
      "id": 12,
      "week": 3,
      "front": "Archiving vs compression?",
      "back": "Combine files vs reduce encoded size. RU: tar без сжатия объединяет; gzip сжимает."
    },
    {
      "id": 13,
      "week": 4,
      "front": "Read, write and execute weights?",
      "back": "r=4, w=2, x=1. RU: складываем отдельно для owner, group, others."
    },
    {
      "id": 14,
      "week": 4,
      "front": "Decode 754.",
      "back": "rwx r-x r--. RU: владелец 7, группа 5, остальные 4."
    },
    {
      "id": 15,
      "week": 4,
      "front": "What does export actually change?",
      "back": "Inheritance by new child processes. RU: не делает значение общим для всех существующих процессов."
    },
    {
      "id": 16,
      "week": 4,
      "front": "What is PATH?",
      "back": "A colon-separated command search path. RU: список каталогов поиска executable-файлов."
    },
    {
      "id": 17,
      "week": 5,
      "front": "What is PID 1?",
      "back": "The first user-space process, commonly systemd. RU: запускается ядром при загрузке."
    },
    {
      "id": 18,
      "week": 5,
      "front": "SIGSTOP vs SIGTERM?",
      "back": "Suspend vs request termination. RU: приостановить не значит завершить."
    },
    {
      "id": 19,
      "week": 5,
      "front": "What is the nice range?",
      "back": "-20 to 19; lower normally means higher CPU priority. RU: больше NI — меньше относительный приоритет."
    },
    {
      "id": 20,
      "week": 5,
      "front": "at vs cron?",
      "back": "One-time scheduling vs recurring jobs. RU: один запуск или расписание повторов."
    },
    {
      "id": 21,
      "week": 6,
      "front": "start vs enable?",
      "back": "Run now vs configure activation. RU: enable без --now не обязан запускать сейчас."
    },
    {
      "id": 22,
      "week": 6,
      "front": "reload vs daemon-reload?",
      "back": "Service configuration vs systemd unit definitions. RU: разные уровни конфигурации."
    },
    {
      "id": 23,
      "week": 6,
      "front": "What closes a Bash if statement?",
      "back": "fi. RU: if ...; then ...; else ...; fi."
    },
    {
      "id": 24,
      "week": 6,
      "front": "What does -gt mean in a test?",
      "back": "Integer greater than. RU: [ \"$A\" -gt \"$B\" ]."
    },
    {
      "id": 25,
      "week": 7,
      "front": "What does a device driver do?",
      "back": "Controls device-specific operations. RU: преобразует общие запросы в команды устройству."
    },
    {
      "id": 26,
      "week": 7,
      "front": "df vs du?",
      "back": "Filesystem space vs disk usage of selected files/directories. RU: показывают разные представления."
    },
    {
      "id": 27,
      "week": 7,
      "front": "What is buffering?",
      "back": "Temporary storage to smooth transfer differences. RU: данные временно удерживаются при передаче."
    },
    {
      "id": 28,
      "week": 7,
      "front": "What does SSTF select?",
      "back": "The nearest pending disk request. RU: ближайший запрос; возможна starvation."
    },
    {
      "id": 29,
      "week": 8,
      "front": "Primary vs supplementary group?",
      "back": "Default group identity vs extra memberships. RU: primary GID задан в /etc/passwd."
    },
    {
      "id": 30,
      "week": 8,
      "front": "usermod -aG vs -G?",
      "back": "Append vs replace supplementary memberships. RU: без -a можно потерять прежние группы."
    },
    {
      "id": 31,
      "week": 8,
      "front": "What does newgrp do?",
      "back": "Starts a shell in another group context. RU: временно меняет активную группу сеанса."
    },
    {
      "id": 32,
      "week": 8,
      "front": "Which command creates GID 2000?",
      "back": "sudo groupadd -g 2000 research. RU: groupadd создаёт группу, -g задаёт GID."
    },
    {
      "id": 33,
      "week": 9,
      "front": "Hard link vs symlink?",
      "back": "Same inode vs stored target pathname. RU: symlink может стать dangling."
    },
    {
      "id": 34,
      "week": 9,
      "front": "What does setgid do on a directory?",
      "back": "New objects inherit its group. RU: не даёт write автоматически."
    },
    {
      "id": 35,
      "week": 9,
      "front": "What does the sticky bit restrict?",
      "back": "Deletion/renaming of others’ directory entries, with owner/privileged exceptions. RU: не шифрует файлы."
    },
    {
      "id": 36,
      "week": 9,
      "front": "What does default ACL affect?",
      "back": "New child objects, not existing ones. RU: наследование при создании."
    },
    {
      "id": 37,
      "week": 10,
      "front": "Page size 4096, address 13000: page and offset?",
      "back": "Page 3, offset 712. RU: 13000 = 3×4096+712."
    },
    {
      "id": 38,
      "week": 10,
      "front": "Virtual memory vs swap?",
      "back": "Address-space abstraction vs a possible backing store. RU: виртуальная память шире swap."
    },
    {
      "id": 39,
      "week": 10,
      "front": "What is a race condition?",
      "back": "Correctness depends on interleaving of shared-state operations. RU: возможна потеря обновления counter++."
    },
    {
      "id": 40,
      "week": 10,
      "front": "Pipeline: four stages of 1 ns each?",
      "back": "Latency 4 ns, ideal filled throughput 1 instruction/ns. RU: время одной инструкции и скорость потока отличаются."
    }
  ],
  "implementations": [
    {
      "id": 1,
      "name": "System snapshot",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: Получаем kernel, пользователя, каталог, память и processes."
        },
        {
          "kind": "paragraph",
          "text": "EN: Print a read-only snapshot of system information."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nuname -r\nwhoami\npwd\nfree -h\nps -ef"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 2,
      "name": "Check a file",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: -f проверяет regular file; кавычки сохраняют пробелы."
        },
        {
          "kind": "paragraph",
          "text": "EN: Test for a regular file before inspecting it."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nread -r -p \"File path: \" path\nif [ -f \"$path\" ]; then\n    stat -- \"$path\"\nelse\n    echo \"No regular file found.\"\nfi"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 3,
      "name": "Count text files",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: Один маркер на файл, затем подсчёт маркеров."
        },
        {
          "kind": "paragraph",
          "text": "EN: Count current-directory regular .txt files without relying on filename line breaks."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nfind . -maxdepth 1 -type f -name '*.txt' -printf '1\\n' | wc -l"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 4,
      "name": "Inspect a service",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: Показываем state и последние journal entries."
        },
        {
          "kind": "paragraph",
          "text": "EN: Inspect the current state and recent boot logs for a service."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nread -r -p \"Service name: \" service\nsystemctl status -- \"$service\"\njournalctl -u \"$service\" -b --no-pager -n 20"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 5,
      "name": "Read account information",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: id показывает primary и supplementary IDs."
        },
        {
          "kind": "paragraph",
          "text": "EN: Inspect identity and group membership without modifying accounts."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nread -r -p \"Username: \" username\nid -- \"$username\"\ngroups -- \"$username\"\ngetent passwd \"$username\""
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 6,
      "name": "List large files",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: Ищем regular files больше 100 KiB по правилам GNU find."
        },
        {
          "kind": "paragraph",
          "text": "EN: Find regular files above the specified size threshold."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nfind . -type f -size +100k -printf '%p\\n'"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 7,
      "name": "Print arguments safely",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: \"$@\" сохраняет границы аргументов."
        },
        {
          "kind": "paragraph",
          "text": "EN: Iterate over positional parameters while preserving spaces."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nfor path in \"$@\"; do\n    printf 'Argument: %s\\n' \"$path\"\ndone"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    },
    {
      "id": 8,
      "name": "Calculate and loop",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "RU: Сумма 35, затем шаги 1, 2, 3."
        },
        {
          "kind": "paragraph",
          "text": "EN: Use integer arithmetic and a for loop."
        },
        {
          "kind": "code",
          "text": "#!/bin/bash\nsum=$((10 + 25))\nprintf 'Sum: %s\\n' \"$sum\"\nfor n in 1 2 3; do\n    printf 'Step %s\\n' \"$n\"\ndone"
        },
        {
          "kind": "paragraph",
          "text": "Save as a .sh file. Check syntax with bash -n file.sh; run in your own Linux VM. This page displays code and does not execute system commands."
        }
      ]
    }
  ],
  "samples": [
    {
      "id": "ma-1",
      "num": 1,
      "week": 2,
      "text": "Which command-line interface component stores previously executed commands for quick re-execution?",
      "choices": [
        "history",
        "pwd",
        "alias",
        "env",
        "jobs"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "history показывает ранее введённые команды. Это история оболочки, а не список запущенных процессов.",
      "whyEn": "The history builtin lists saved shell commands for reuse.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 1,
      "optionsAuthored": true
    },
    {
      "id": "ma-2",
      "num": 2,
      "week": 2,
      "text": "What shortcut re-executes the most recent command starting with the string 'cat' from shell history?",
      "choices": [
        "!cat",
        "cat!",
        "history cat",
        "!!cat",
        "!lastcat"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "!cat находит в истории последнюю команду, начинающуюся с cat, и выполняет её. !! повторяет просто последнюю команду.",
      "whyEn": "In interactive Bash with history expansion enabled, !cat re-executes the latest command beginning with cat.",
      "note": "History expansion обычно используется в интерактивном Bash; в скриптах на него не полагаются.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 2,
      "optionsAuthored": true
    },
    {
      "id": "ma-3",
      "num": 3,
      "week": 4,
      "text": "Which command promotes a local shell variable to a global environment variable inherited by child processes?",
      "choices": [
        "export",
        "setenvall",
        "alias",
        "env -clear",
        "source"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "export передаёт переменную последующим дочерним процессам. Уже запущенные процессы и другие независимые shell не получают новое значение автоматически.",
      "whyEn": "Export marks a shell variable for inheritance by subsequently launched child processes.",
      "note": "Слово global в исходнике не означает общую переменную для всех процессов системы.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 3,
      "optionsAuthored": true
    },
    {
      "id": "ma-4",
      "num": 4,
      "week": 2,
      "text": "What command identifies whether a given command is an alias, shell built-in, or external binary file?",
      "choices": [
        "which",
        "whereis",
        "find",
        "type",
        "pwd"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "type показывает, чем является команда: builtin, alias, function или найденный executable.",
      "whyEn": "Type reports how the shell resolves a command name.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 4,
      "optionsAuthored": true
    },
    {
      "id": "ma-5",
      "num": 5,
      "week": 8,
      "text": "Which directory contains system-wide configuration files such as passwd?",
      "choices": [
        "/var",
        "/home",
        "/proc",
        "/tmp",
        "/etc"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "В /etc находятся системные конфигурационные файлы. /etc/passwd описывает учётные записи; /var хранит изменяемые рабочие данные.",
      "whyEn": "The /etc hierarchy stores host-specific system configuration.",
      "note": "В исходнике сказано volatile system configuration; volatile здесь неточно. Формулировка уточнена.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 5,
      "optionsAuthored": true,
      "originalText": "Which directory under the root filesystem contains volatile system configuration files like /etc/passwd?"
    },
    {
      "id": "ma-6",
      "num": 6,
      "week": 3,
      "text": "What command is used to safely remove empty directories from the filesystem?",
      "choices": [
        "rm -f",
        "mkdir",
        "touch",
        "unlink -r",
        "rmdir"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "rmdir удаляет пустой каталог и отказывается удалять непустой.",
      "whyEn": "Rmdir removes empty directories.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 6,
      "optionsAuthored": true
    },
    {
      "id": "ma-7",
      "num": 7,
      "week": 3,
      "text": "Which option forces cp to prompt the user before overwriting an existing destination file?",
      "choices": [
        "-f",
        "-r",
        "-a",
        "-n",
        "-i"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "cp -i включает interactive mode: перед перезаписью существующего destination запрашивается подтверждение.",
      "whyEn": "The -i option prompts before overwriting a destination.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 7,
      "optionsAuthored": true
    },
    {
      "id": "ma-8",
      "num": 8,
      "week": 3,
      "text": "Which compression tool uses Burrows-Wheeler block sorting and produces files with .bz2 extensions?",
      "choices": [
        "bzip2",
        "gzip",
        "tar",
        "xz",
        "zip"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "bzip2 использует Burrows–Wheeler block sorting; обычное расширение результата .bz2. tar объединяет файлы, а gzip создаёт .gz.",
      "whyEn": "Bzip2 compresses data using Burrows–Wheeler block sorting and normally produces a .bz2 file.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 8,
      "optionsAuthored": true
    },
    {
      "id": "ma-9",
      "num": 9,
      "week": 3,
      "text": "Which file descriptor number represents Standard Error (STDERR) in Linux stream redirection?",
      "choices": [
        "2",
        "0",
        "1",
        "3",
        "4"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Дескрипторы стандартных потоков: 0 stdin, 1 stdout, 2 stderr.",
      "whyEn": "Standard error is file descriptor 2.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 9,
      "optionsAuthored": true
    },
    {
      "id": "ma-10",
      "num": 10,
      "week": 3,
      "text": "Which command pipelines standard output into wc -l to count matching lines from a text file?",
      "choices": [
        "wc -l | grep 'pattern' file",
        "grep -l 'pattern' file",
        "grep 'pattern' file | wc -l",
        "cat 'pattern' | file",
        "sort -n file"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "grep отбирает подходящие строки; pipe передаёт их wc -l, который считает строки.",
      "whyEn": "Grep selects matching lines; wc -l counts those output lines.",
      "note": "Это подсчёт строк, не всех вхождений слова внутри строки.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 10,
      "optionsAuthored": true
    },
    {
      "id": "ma-11",
      "num": 11,
      "week": 3,
      "text": "In nano text editor, which keyboard shortcut searches for text strings in the document?",
      "choices": [
        "Ctrl + W",
        "Ctrl + O",
        "Ctrl + X",
        "Ctrl + K",
        "Ctrl + G"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "В nano Ctrl+W открывает поиск. Ctrl+O сохраняет, Ctrl+X выходит.",
      "whyEn": "In nano, Ctrl+W starts a text search.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 11,
      "optionsAuthored": true
    },
    {
      "id": "ma-12",
      "num": 12,
      "week": 6,
      "text": "In test condition evaluations, which operator checks if integer A is greater than integer B?",
      "choices": [
        "-lt",
        "-eq",
        "-gt",
        "-ge",
        "-ne"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "-gt означает greater than для целых чисел: [ \"$A\" -gt \"$B\" ].",
      "whyEn": "The -gt test operator checks whether one integer is greater than another.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 12,
      "optionsAuthored": true
    },
    {
      "id": "ma-13",
      "num": 13,
      "week": 6,
      "text": "Which structure in a Bash script closes an if conditional block?",
      "choices": [
        "done",
        "end",
        "then",
        "esac",
        "fi"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "Условие Bash имеет вид if ...; then ...; else ...; fi. Циклы обычно заканчиваются done.",
      "whyEn": "Fi closes an if statement in shell syntax.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 13,
      "optionsAuthored": true
    },
    {
      "id": "ma-14",
      "num": 14,
      "week": 8,
      "text": "What type of disk partition table supports drives larger than 2 Terabytes and up to 128 primary partitions?",
      "choices": [
        "GPT",
        "MBR",
        "FAT32",
        "ext4",
        "BIOS"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "GPT использует современную таблицу разделов и поддерживает диски за типичным пределом MBR около 2 TiB при секторах 512 bytes.",
      "whyEn": "GPT supports large disks; 128 entries is a common default partition-table configuration.",
      "note": "128 — распространённая конфигурация GPT, а не абсолютный предел формата.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 14,
      "optionsAuthored": true
    },
    {
      "id": "ma-15",
      "num": 15,
      "week": 8,
      "text": "What device node format represents the second partition on the first SATA disk drive?",
      "choices": [
        "/dev/sdb2",
        "/dev/sda1",
        "/dev/sdb1",
        "/dev/nvme0n1p1",
        "/dev/sda2"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "sda — первый диск в таком соглашении имён, цифра 2 — второй раздел. sdb обозначает другой диск.",
      "whyEn": "In the sd device naming convention, /dev/sda2 is partition 2 of disk sda.",
      "note": "Порядок имён устройств не гарантируется навсегда; для NVMe используется другое соглашение.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 15,
      "optionsAuthored": true
    },
    {
      "id": "ma-16",
      "num": 16,
      "week": 1,
      "text": "What is the key structural difference between Red Hat (.rpm) and Debian (.deb) distribution families?",
      "choices": [
        "Both use only .exe packages",
        "Red Hat uses DEB; Debian uses RPM",
        "They differ only in desktop wallpaper",
        "Red Hat uses RPM packages managed by yum/dnf; Debian uses DEB packages managed by dpkg/apt",
        "Debian cannot install software"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Семейства используют разные форматы пакетов и инструменты управления: RPM/dnf и DEB/dpkg/apt.",
      "whyEn": "Red Hat-family distributions use RPM packages; Debian-family distributions use DEB packages.",
      "note": "yum встречается в старых/совместимых окружениях; это не единственное различие дистрибутивов.",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 16,
      "optionsAuthored": true
    },
    {
      "id": "ma-17",
      "num": 17,
      "week": 4,
      "text": "Which Bash command displays the contents of a variable named MY_VAR to standard output?",
      "choices": [
        "print MY_VAR",
        "echo MY_VAR",
        "cat $MY_VAR",
        "export --show MY_VAR",
        "echo $MY_VAR"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "$MY_VAR раскрывается в значение переменной; echo печатает его. Обычно безопаснее echo \"$MY_VAR\", чтобы сохранить пробелы.",
      "whyEn": "Parameter expansion obtains the variable value; echo writes it to standard output.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 17,
      "optionsAuthored": true
    },
    {
      "id": "ma-18",
      "num": 18,
      "week": 2,
      "text": "What command allows you to search for manual pages matching a specific keyword in their descriptions?",
      "choices": [
        "man -delete",
        "which",
        "apropos",
        "type",
        "history"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "apropos ищет keyword в названиях и кратких описаниях man pages.",
      "whyEn": "Apropos searches manual-page names and descriptions.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 18,
      "optionsAuthored": true
    },
    {
      "id": "ma-19",
      "num": 19,
      "week": 2,
      "text": "Which navigation key quits the info documentation viewer?",
      "choices": [
        "x",
        "Ctrl + S",
        "Esc + Enter",
        "q",
        "w"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "q закрывает info viewer. Это похоже на выход из man/less.",
      "whyEn": "The q key quits the info documentation viewer.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 19,
      "optionsAuthored": true
    },
    {
      "id": "ma-20",
      "num": 20,
      "week": 3,
      "text": "What path character represents the user's home directory shortcut in Linux?",
      "choices": [
        "/",
        ".",
        "..",
        "#",
        "~"
      ],
      "answer": 4,
      "correctAnswers": [
        4
      ],
      "whyRu": "Тильда ~ в подходящей позиции раскрывается shell в домашний каталог пользователя. / — корень, .. — родительский каталог.",
      "whyEn": "An unquoted leading tilde is expanded to the user’s home directory.",
      "note": "",
      "source": "sample",
      "set": "midterm-a",
      "setLabel": "Midterm · set A",
      "sourceNum": 20,
      "optionsAuthored": true
    },
    {
      "id": "mb-1",
      "num": 21,
      "week": 2,
      "text": "Which command displays the currently installed kernel release?",
      "choices": [
        "hostname -r",
        "uname -r",
        "who -r",
        "pwd -r"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "uname -r печатает kernel release. hostname показывает имя машины.",
      "whyEn": "Uname -r prints the running kernel release.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 1
    },
    {
      "id": "mb-2",
      "num": 22,
      "week": 2,
      "text": "What is the purpose of SSH?",
      "choices": [
        "To display the contents of a directory",
        "To change file ownership",
        "To compress files on a local computer",
        "To securely access and execute commands on a remote computer"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "SSH даёт защищённый удалённый вход и выполнение команд, обычно через TCP 22.",
      "whyEn": "SSH provides encrypted remote login and command execution.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 2
    },
    {
      "id": "mb-3",
      "num": 23,
      "week": 2,
      "text": "Which symbol normally indicates a privileged root shell prompt?",
      "choices": [
        "$",
        "#",
        "&",
        "~"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "# обычно обозначает root prompt, $ — обычного пользователя. Символ приглашения можно настроить, поэтому это условность.",
      "whyEn": "A root shell conventionally uses #, but a customized prompt is not proof of privileges.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 3
    },
    {
      "id": "mb-4",
      "num": 24,
      "week": 5,
      "text": "A student has installed openssh-server on a Linux virtual machine. The service must start now, start automatically after reboot, and then accept a remote login. Which sequence is correct?",
      "choices": [
        "chmod 755 ssh; systemctl delete ssh; ssh username@localhost",
        "sudo systemctl stop ssh; sudo systemctl disable ssh; ssh IP_address@username",
        "sudo systemctl start ssh; sudo systemctl enable ssh; ssh username@IP_address",
        "sudo apt remove openssh-server; ifconfig; ssh username"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "start запускает SSH сейчас, enable настраивает автозапуск, ssh user@address подключается как клиент.",
      "whyEn": "Start activates now, enable configures future activation, and ssh user@host connects remotely.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 4
    },
    {
      "id": "mb-5",
      "num": 25,
      "week": 3,
      "text": "A system administrator must find all .conf files larger than 100 KiB under /, show only files owned by root, and hide permission errors. Which command is the best choice?",
      "choices": [
        "find / -type d -name \"*.conf\" -user root -size 100k 1>/dev/null",
        "locate / -type f -name \"*.conf\" > /dev/null",
        "find / -type f -name \"*.conf\" -user root -size +100k 2>/dev/null",
        "grep / \"*.conf\" -user root -size +100k"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "-type f выбирает обычные файлы; -name шаблон имени; -user владельца; -size +100k размер; 2>/dev/null прячет stderr.",
      "whyEn": "Find combines type, name, owner and size predicates; stderr redirection hides errors.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 5
    },
    {
      "id": "mb-6",
      "num": 26,
      "week": 4,
      "text": "In a Linux permission string, what do r, w, and x represent?",
      "choices": [
        "Rename, write, and extract",
        "Read, watch, and expand",
        "Read, write, and execute",
        "Run, wait, and exit"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "r=read, w=write, x=execute; значения 4, 2 и 1 складываются для каждого класса пользователя.",
      "whyEn": "The permission bits are read, write and execute, with octal weights 4, 2 and 1.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 6
    },
    {
      "id": "mb-7",
      "num": 27,
      "week": 4,
      "text": "What is the main purpose of the PS1 variable?",
      "choices": [
        "To store the previous command",
        "To store the current user's password",
        "To define the system IP address",
        "To define the primary shell prompt"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "PS1 определяет основное приглашение shell; PS2 — дополнительное приглашение для незавершённого ввода.",
      "whyEn": "PS1 controls the primary shell prompt; PS2 controls the continuation prompt.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 7
    },
    {
      "id": "mb-8",
      "num": 28,
      "week": 3,
      "text": "Which redirection appends standard output to results.txt without overwriting its existing contents?",
      "choices": [
        "< results.txt",
        "2> results.txt",
        "> results.txt",
        ">> results.txt"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": ">> добавляет stdout в конец файла. > заменяет содержимое, 2> перенаправляет stderr.",
      "whyEn": "The append redirection >> preserves existing contents and appends standard output.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 8
    },
    {
      "id": "mb-9",
      "num": 29,
      "week": 4,
      "text": "What is a regular expression?",
      "choices": [
        "A sequence of characters that defines a search pattern",
        "A command used only to start a service",
        "A numeric code that identifies a user",
        "A directory that stores executable files"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Regex задаёт шаблон поиска в тексте. Это не команда запуска службы и не UID.",
      "whyEn": "A regular expression is a pattern for matching text.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 9
    },
    {
      "id": "mb-10",
      "num": 30,
      "week": 4,
      "text": "Which command changes the owner of report.txt to alice and its group to developers?",
      "choices": [
        "chown alice:developers report.txt",
        "chmod alice:developers report.txt",
        "mv alice:developers report.txt",
        "adduser alice:developers report.txt"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "chown alice:developers меняет owner и owning group. chmod меняет permission bits.",
      "whyEn": "Chown accepts owner:group to change file ownership.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 10
    },
    {
      "id": "mb-11",
      "num": 31,
      "week": 4,
      "text": "Which command searches error.log for the word failed without distinguishing uppercase and lowercase letters?",
      "choices": [
        "grep -v \"failed\" error.log",
        "grep -c \"failed\" error.log",
        "sort -i \"failed\" error.log",
        "grep -i \"failed\" error.log"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "grep -i отключает различение регистра при поиске; -v инвертирует совпадение, -c считает строки.",
      "whyEn": "Grep -i performs case-insensitive matching.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 11
    },
    {
      "id": "mb-12",
      "num": 32,
      "week": 4,
      "text": "What does the PATH environment variable contain?",
      "choices": [
        "The permissions assigned to the current user",
        "Directories in which the shell searches for executable commands",
        "The address of the default network interface",
        "The contents of the current text file"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "PATH содержит разделённые двоеточиями каталоги поиска исполняемых команд.",
      "whyEn": "PATH is a colon-separated list of directories searched for commands.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 12
    },
    {
      "id": "mb-13",
      "num": 33,
      "week": 3,
      "text": "Which file descriptor represents standard error in Linux?",
      "choices": [
        "0",
        "1",
        "3",
        "2"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "stderr — дескриптор 2. stdout — 1, stdin — 0.",
      "whyEn": "File descriptor 2 is standard error.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 13
    },
    {
      "id": "mb-16",
      "num": 34,
      "week": 3,
      "text": "What is the main difference between archiving and compression?",
      "choices": [
        "Archiving combines files, while compression reduces file size",
        "There is no difference between the two processes",
        "Archiving combines files, while compression reduces their size",
        "Archiving reduces file size, while compression changes structure"
      ],
      "answer": 0,
      "correctAnswers": [
        0,
        2
      ],
      "whyRu": "Архивация объединяет файлы, сжатие уменьшает представление данных. В исходнике A и C выражают одну правильную мысль.",
      "whyEn": "Archiving combines files; compression reduces their encoded size. Both equivalent choices are accepted.",
      "note": "В исходном файле два равноценных ответа: A и C. Любой засчитывается.",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 16
    },
    {
      "id": "mb-17",
      "num": 35,
      "week": 2,
      "text": "Which statement best defines a shell in Linux?",
      "choices": [
        "A program that interprets commands and provides an interface between the user and the operating system",
        "A graphical tool used only for file compression",
        "A utility used only to create user accounts",
        "A hardware component that stores the operating system"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Shell интерпретирует команды пользователя и запускает действия ОС; это программа, не аппаратная часть.",
      "whyEn": "A shell is a command interpreter and interface to operating-system services.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 17
    },
    {
      "id": "mb-18",
      "num": 36,
      "week": 3,
      "text": "Which command finds regular files ending in .conf under /etc?",
      "choices": [
        "grep /etc -type .conf",
        "locate /etc -type f .conf",
        "find /etc -type f -name \"*.conf\"",
        "which /etc/*.conf"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "find ищет рекурсивно; -type f оставляет regular files, -name ограничивает имена. Кавычки защищают glob от раннего раскрытия shell.",
      "whyEn": "Find searches regular files matching the quoted filename pattern under /etc.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 18
    },
    {
      "id": "mb-19",
      "num": 37,
      "week": 2,
      "text": "Which command displays the username of the currently logged-in user?",
      "choices": [
        "whoami",
        "uname -r",
        "lsblk",
        "hostname"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "whoami показывает имя текущего effective user. uname сообщает об ОС/ядре, hostname — об имени хоста.",
      "whyEn": "Whoami prints the effective user name.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 19
    },
    {
      "id": "mb-20",
      "num": 38,
      "week": 3,
      "text": "What does the command `cd -` normally do?",
      "choices": [
        "Moves to the root directory",
        "Deletes the current directory",
        "Moves one level up",
        "Moves to the previous working directory"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "cd - возвращает предыдущий рабочий каталог, обычно через OLDPWD. cd .. поднимается к родителю.",
      "whyEn": "Cd - switches to the previous working directory, not the parent directory.",
      "note": "",
      "source": "sample",
      "set": "midterm-b",
      "setLabel": "Midterm · set B",
      "sourceNum": 20
    },
    {
      "id": "e-1",
      "num": 39,
      "week": 9,
      "text": "Which command creates a symbolic (soft) link named mylink pointing to /etc/passwd?",
      "choices": [
        "chmod +s /etc/passwd mylink",
        "ln -s /etc/passwd mylink",
        "cp -s /etc/passwd mylink",
        "link /etc/passwd mylink",
        "ln /etc/passwd mylink"
      ],
      "answer": 1,
      "correctAnswers": [
        1,
        2
      ],
      "whyRu": "ln -s сохраняет путь к target в symbolic link. Но GNU cp -s с абсолютным источником тоже создаёт symlink.",
      "whyEn": "Ln -s is the conventional command. GNU cp -s can also create the requested symbolic link.",
      "note": "В исходнике B и C технически допустимы в GNU/Linux; оба засчитываются.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 1
    },
    {
      "id": "e-2",
      "num": 40,
      "week": 4,
      "text": "What octal value corresponds to read and write permissions (rw-) for a permission set?",
      "choices": [
        "5",
        "2",
        "7",
        "6",
        "4"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "rw- = read 4 + write 2 = 6. Execute отсутствует.",
      "whyEn": "Read plus write is 4 + 2 = 6.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 2
    },
    {
      "id": "e-3",
      "num": 41,
      "week": 2,
      "text": "Which command-line tool is the modern replacement for ifconfig to display and configure network interface addresses?",
      "choices": [
        "route",
        "ping",
        "ip addr show",
        "dig",
        "netstat"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "ip addr show показывает адреса интерфейсов; современный пакет iproute2 заменяет многие задачи старого ifconfig.",
      "whyEn": "Ip addr show displays interface addresses using iproute2.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 3
    },
    {
      "id": "e-4",
      "num": 42,
      "week": 8,
      "text": "Which command allows a user to temporarily switch their active primary group session to another group they belong to?",
      "choices": [
        "groupmod",
        "chown",
        "usermod",
        "newgrp",
        "chgrp"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "newgrp запускает shell с изменённой активной группой. Это не постоянное редактирование primary GID в /etc/passwd.",
      "whyEn": "Newgrp changes the group context of a new shell session.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 4
    },
    {
      "id": "e-5",
      "num": 43,
      "week": 5,
      "text": "Which traditional log file may contain a saved copy of boot-time kernel messages?",
      "choices": [
        "/etc/sysctl.conf",
        "/var/log/dmesg",
        "/var/log/lastlog",
        "/var/log/wtmp",
        "/proc/meminfo"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Kernel пишет в ring buffer; dmesg его показывает, journalctl -k -b показывает kernel journal текущей загрузки. /var/log/dmesg — традиционный сохранённый снимок, который есть не на каждой системе.",
      "whyEn": "The kernel uses a ring buffer. /var/log/dmesg is a traditional saved boot-message file, not a universal kernel destination.",
      "note": "Исходный вопрос смешивает kernel ring buffer и файл логирования. Формулировка уточнена.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 5,
      "originalText": "Where does the kernel log messages produced specifically during the system boot procedure?"
    },
    {
      "id": "e-6",
      "num": 44,
      "week": 8,
      "text": "Which file defines user primary group membership in contrast to secondary memberships in /etc/group?",
      "choices": [
        "/etc/passwd",
        "/etc/login.defs",
        "/etc/sudoers",
        "/etc/gshadow",
        "/etc/shadow"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "В /etc/passwd поле GID задаёт primary group. /etc/group содержит сведения о группах и явных дополнительных членствах.",
      "whyEn": "The GID field in /etc/passwd specifies the account’s primary group.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 6
    },
    {
      "id": "e-7",
      "num": 45,
      "week": 2,
      "text": "Where does the SSH client normally save accepted remote host public keys for later verification?",
      "choices": [
        "~/.ssh/authorized_keys",
        "~/.ssh/known_hosts",
        "/etc/hosts",
        "/etc/ssh/sshd_config",
        "/var/log/secure"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "known_hosts хранит принятые публичные ключи удалённых хостов; при следующих подключениях клиент проверяет их. authorized_keys содержит ключи, которым разрешён вход к этой учётной записи.",
      "whyEn": "Known_hosts records trusted host public keys. Authorized_keys instead authorizes user keys for login.",
      "note": "Файл хранит ключи хостов, а не только напечатанные fingerprints; формулировка уточнена.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 7,
      "originalText": "Where does the ssh client permanently save accepted remote host RSA public key fingerprints on the local system?"
    },
    {
      "id": "e-8",
      "num": 46,
      "week": 9,
      "text": "Why can symbolic links target directories or cross filesystem boundaries, whereas hard links cannot?",
      "choices": [
        "Symbolic links store the target pathname, while hard links point directly to an inode number on a single filesystem.",
        "Symbolic links require root privileges.",
        "Symbolic links are restricted to read-only filesystems.",
        "Hard links occupy zero disk space.",
        "Hard links use binary encryption."
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Symlink хранит pathname и может указывать на каталог или другую FS. Hard link ссылается на inode в своей FS; обычным пользователям hard links на каталоги запрещены.",
      "whyEn": "A symbolic link stores a pathname; a hard link names an inode within one filesystem.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 8
    },
    {
      "id": "e-9",
      "num": 47,
      "week": 9,
      "text": "Which command finds all hard-linked files sharing inode number 278772?",
      "choices": [
        "locate 278772",
        "stat -i 278772",
        "find / -inum 278772",
        "ls -i 278772",
        "grep 278772 /etc/passwd"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "find -inum выбирает объекты по inode number. Но одинаковый номер может существовать на разных FS, поэтому глобальный find не гарантирует только hard links одного файла.",
      "whyEn": "Find -inum matches inode numbers; scope the search to the relevant filesystem to identify actual hard links.",
      "note": "Одинаковые inode numbers на разных filesystems не означают один файл.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 9
    },
    {
      "id": "e-10",
      "num": 48,
      "week": 5,
      "text": "What range of niceness values can be assigned to a process to adjust its scheduling priority in top or renice?",
      "choices": [
        "-100 to 100",
        "-20 to 19",
        "1 to 10",
        "0 to 100",
        "0 to 255"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Обычный диапазон NI от -20 до 19. Меньшее значение означает больший относительный приоритет CPU.",
      "whyEn": "Nice values range from -20 to 19; lower values generally mean higher normal scheduling priority.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 10
    },
    {
      "id": "e-11",
      "num": 49,
      "week": 4,
      "text": "What permissions will a newly created directory receive if the system umask is set to 027?",
      "choices": [
        "700 (rwx------)",
        "640 (rw-r-----)",
        "755 (rwxr-xr-x)",
        "750 (rwxr-x---)",
        "777 (rwxrwxrwx)"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Для нового каталога при requested mode 777 и без default ACL: 777 AND NOT 027 = 750, то есть rwxr-x---.",
      "whyEn": "Applying umask 027 to a requested directory mode 777 gives 750.",
      "note": "Предполагаются обычный requested mode 777 и отсутствие default ACL.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 11
    },
    {
      "id": "e-12",
      "num": 50,
      "week": 5,
      "text": "What process ID (PID) is assigned to the initial system process (init/systemd) started by the kernel at boot time?",
      "choices": [
        "PID 500",
        "PID 0",
        "PID 1000",
        "PID 1",
        "PID 100"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "После инициализации kernel запускает первый user-space процесс с PID 1: init или обычно systemd.",
      "whyEn": "The initial user-space process has PID 1.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 12
    },
    {
      "id": "e-13",
      "num": 51,
      "week": 8,
      "text": "According to the Filesystem Hierarchy Standard (FHS), what is stored under /var?",
      "choices": [
        "User home directories",
        "Essential boot binaries.",
        "Static configuration files.",
        "Variable files whose content changes over time (logs, spool, mail).",
        "Kernel virtual files."
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "/var содержит изменяемые данные: logs, spool, mail и другие рабочие файлы. /etc — конфигурация.",
      "whyEn": "The /var hierarchy contains variable data such as logs, mail and spool files.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 13
    },
    {
      "id": "e-14",
      "num": 52,
      "week": 9,
      "text": "What permissions are set on a directory by executing chmod 1775 /shared?",
      "choices": [
        "rwsr-xr-x with setuid",
        "rw-r--r--",
        "rwxr-sr-x with setgid",
        "rwxrwxr-t with sticky bit",
        "rwxrwxrwt with sticky bit"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "1 задаёт sticky bit, 775 = rwx rwx r-x. Sticky вместе с execute у others отображается как t: rwxrwxr-t.",
      "whyEn": "Mode 1775 is rwxrwxr-t: sticky plus owner/group rwx and others r-x.",
      "note": "В полном ls -l для каталога будет drwxrwxr-t. Это 1775, а не 1777.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 14
    },
    {
      "id": "e-15",
      "num": 53,
      "week": 2,
      "text": "Which file specifies the local domain name search paths appended during DNS resolution?",
      "choices": [
        "/etc/resolv.conf",
        "/etc/nsswitch.conf",
        "/etc/hosts",
        "/etc/protocols",
        "/etc/sysconfig/network"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "search в resolv.conf задаёт DNS suffixes, добавляемые при поиске коротких имён. На современных системах файл часто генерируется resolver manager.",
      "whyEn": "The search directive in resolv.conf specifies DNS search domains.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 15
    },
    {
      "id": "e-16",
      "num": 54,
      "week": 8,
      "text": "Which command is used by root to create a new group account with a specific GID?",
      "choices": [
        "useradd -G",
        "groupmod -n",
        "groupadd -g",
        "usermod -g",
        "chgrp"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "groupadd создаёт группу; -g задаёт числовой GID. Например sudo groupadd -g 2000 research.",
      "whyEn": "Groupadd -g creates a group with a specified numeric GID.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 16
    },
    {
      "id": "e-17",
      "num": 55,
      "week": 5,
      "text": "In the top utility, which key is pressed to send a termination signal (such as signal 9) to a runaway process?",
      "choices": [
        "r",
        "k",
        "q",
        "m",
        "h"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "В top нажимают строчную k, затем указывают PID и сигнал. Большая буква K в исходнике неточна: регистр интерактивных команд важен.",
      "whyEn": "The lowercase k key opens top’s kill-task prompt.",
      "note": "Варианты из исходника уточнены: K заменено на k.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 17,
      "originalChoices": [
        "R",
        "K",
        "Q",
        "M",
        "H"
      ]
    },
    {
      "id": "e-18",
      "num": 56,
      "week": 8,
      "text": "When running sudo to execute a command with administrative privileges, which password is required by default?",
      "choices": [
        "The invoking user's own password",
        "No password is ever required",
        "The system BIOS password",
        "The group password from /etc/gshadow",
        "The root account password"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "По стандартной политике sudo запрашивает пароль вызывающего пользователя. Поведение можно изменить sudoers, также действует credential cache.",
      "whyEn": "By default, sudo authenticates the invoking user, subject to sudoers policy and cached credentials.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 18
    },
    {
      "id": "e-19",
      "num": 57,
      "week": 5,
      "text": "Which command displays current logged-in users along with system uptime and load averages?",
      "choices": [
        "w",
        "id",
        "who",
        "last",
        "lastd"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "w показывает пользователей, uptime и load averages. who перечисляет login sessions без такого общего summary.",
      "whyEn": "W combines current login information with uptime and load averages.",
      "note": "",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 19
    },
    {
      "id": "e-20",
      "num": 58,
      "week": 9,
      "text": "What is the primary function of the sticky bit when set on a world-writable directory like /tmp?",
      "choices": [
        "Forces all files to be executable.",
        "Encrypts all temporary files automatically.",
        "Prevents non-root users from listing files.",
        "Prevents users from deleting or renaming files owned by others.",
        "Disables subdirectories inside /tmp."
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Sticky bit ограничивает удаление и переименование чужих записей в общем каталоге. Исключения: владелец каталога и привилегированные пользователи.",
      "whyEn": "The sticky bit restricts deletion or renaming by other users, while allowing the file owner, directory owner, or privileged user.",
      "note": "Sticky не запрещает читать или менять содержимое файла, если обычные права это разрешают.",
      "source": "sample",
      "set": "endterm",
      "setLabel": "Endterm",
      "sourceNum": 20
    }
  ],
  "practice": [
    {
      "id": "p-1",
      "num": 1,
      "week": 1,
      "text": "Which component executes privileged OS operations?",
      "choices": [
        "Kernel",
        "Terminal window",
        "Text editor",
        "Shell history"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Ядро управляет защищёнными ресурсами.",
      "whyEn": "The kernel executes privileged operations.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 1,
      "note": ""
    },
    {
      "id": "p-2",
      "num": 2,
      "week": 1,
      "text": "Which statement about time sharing is correct?",
      "choices": [
        "It shares CPU time for responsive interaction",
        "It prevents more than one program from running",
        "It eliminates all context switches",
        "It requires only one user account"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Time sharing делит CPU на интервалы для отзывчивой работы.",
      "whyEn": "Time sharing gives tasks CPU time to support responsive interaction.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 2,
      "note": ""
    },
    {
      "id": "p-3",
      "num": 3,
      "week": 1,
      "text": "What is the guest OS in an Ubuntu VirtualBox setup?",
      "choices": [
        "Ubuntu running inside the VM",
        "The physical laptop",
        "The VirtualBox installer",
        "The host keyboard driver"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Guest — ОС внутри виртуальной машины.",
      "whyEn": "The guest is the operating system running inside the virtual machine.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 3,
      "note": ""
    },
    {
      "id": "p-4",
      "num": 4,
      "week": 2,
      "text": "Which command lists listening TCP and UDP sockets numerically?",
      "choices": [
        "ss -tuln",
        "uname -r",
        "pwd -l",
        "chmod -n"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "ss показывает sockets, t/u TCP/UDP, l listening, n numeric.",
      "whyEn": "The selected ss options show numeric listening TCP and UDP sockets.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 4,
      "note": ""
    },
    {
      "id": "p-5",
      "num": 5,
      "week": 2,
      "text": "SSH says Permission denied after reaching the server. What is most relevant?",
      "choices": [
        "Authentication and account access rules",
        "The name of the local editor",
        "The archive compression ratio",
        "Only the screen resolution"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Соединение дошло до сервера; проверяем учётную запись и authentication.",
      "whyEn": "The server was reached; authentication or access policy is the relevant next check.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 5,
      "note": ""
    },
    {
      "id": "p-6",
      "num": 6,
      "week": 2,
      "text": "Which command searches manual descriptions?",
      "choices": [
        "apropos",
        "history",
        "free",
        "mount"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "apropos ищет по названиям/описаниям manual pages.",
      "whyEn": "Apropos searches manual page names and descriptions.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 6,
      "note": ""
    },
    {
      "id": "p-7",
      "num": 7,
      "week": 3,
      "text": "What does cd .. do?",
      "choices": [
        "Move to the parent directory",
        "Return to the previous working directory",
        "Delete the directory",
        "Show hidden files"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": ".. — родитель; предыдущий каталог открывает cd -.",
      "whyEn": "Two dots denote the parent directory.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 7,
      "note": ""
    },
    {
      "id": "p-8",
      "num": 8,
      "week": 3,
      "text": "Which redirection sends only errors to errors.txt?",
      "choices": [
        "2> errors.txt",
        "> errors.txt",
        ">> errors.txt",
        "< errors.txt"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "2 — stderr; обычный > относится к stdout.",
      "whyEn": "File descriptor 2 is standard error.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 8,
      "note": ""
    },
    {
      "id": "p-9",
      "num": 9,
      "week": 3,
      "text": "Which tool combines files without necessarily compressing them?",
      "choices": [
        "tar",
        "grep",
        "chmod",
        "whoami"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Обычный tar создаёт архив; сжатие подключают отдельно.",
      "whyEn": "Tar archives files; compression is optional.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 9,
      "note": ""
    },
    {
      "id": "p-10",
      "num": 10,
      "week": 4,
      "text": "What is the mode rw-r-----?",
      "choices": [
        "640",
        "754",
        "644",
        "600"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Владелец получает rw-=6, группа r--=4, остальные ---=0. Получается mode 640.",
      "whyEn": "The three permission sets are 6, 4 and 0.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 10,
      "note": ""
    },
    {
      "id": "p-11",
      "num": 11,
      "week": 4,
      "text": "What does grep -E \"A.*B\" require?",
      "choices": [
        "A before B on the same matching line",
        "A and B in any order",
        "Only B, never A",
        "A filename ending in B"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": ".* — повтор любого символа; порядок A перед B важен.",
      "whyEn": "The expression requires A followed later by B; it is not an order-independent AND.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 11,
      "note": ""
    },
    {
      "id": "p-12",
      "num": 12,
      "week": 4,
      "text": "With requested directory mode 777 and umask 022, what is the result?",
      "choices": [
        "755",
        "777",
        "644",
        "022"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Убираем write для group и others; default ACL не предполагается.",
      "whyEn": "Clearing the masked group/other write bits gives 755, assuming no default ACL.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 12,
      "note": ""
    },
    {
      "id": "p-13",
      "num": 13,
      "week": 5,
      "text": "Which signal resumes a stopped process?",
      "choices": [
        "SIGCONT",
        "SIGKILL",
        "SIGTERM",
        "SIGSTOP"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "CONT продолжает остановленную задачу.",
      "whyEn": "SIGCONT resumes a stopped process.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 13,
      "note": ""
    },
    {
      "id": "p-14",
      "num": 14,
      "week": 5,
      "text": "What happens when NI changes from 0 to 15?",
      "choices": [
        "Lower relative normal CPU priority",
        "Guaranteed fifteenfold speedup",
        "The process is terminated",
        "The process becomes PID 1"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Больше NI означает более вежливый процесс.",
      "whyEn": "A higher nice value generally reduces normal CPU scheduling priority.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 14,
      "note": ""
    },
    {
      "id": "p-15",
      "num": 15,
      "week": 5,
      "text": "When does 30 8 * * * run?",
      "choices": [
        "Daily at 08:30",
        "Every 30 seconds",
        "Only August 30",
        "Every 8 minutes"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Первые поля — minute 30, hour 8.",
      "whyEn": "The user crontab pattern selects minute 30 of hour 8 every day.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 15,
      "note": ""
    },
    {
      "id": "p-16",
      "num": 16,
      "week": 6,
      "text": "Which command rereads changed systemd unit definitions?",
      "choices": [
        "systemctl daemon-reload",
        "systemctl reload-all-files",
        "chmod +x",
        "journalctl -delete"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "daemon-reload обновляет представление unit files.",
      "whyEn": "Daemon-reload rereads systemd unit configuration.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 16,
      "note": ""
    },
    {
      "id": "p-17",
      "num": 17,
      "week": 6,
      "text": "What does [ -d \"$path\" ] test?",
      "choices": [
        "Whether path refers to a directory",
        "Whether a number is divisible",
        "Whether the user is root",
        "Whether the file has a .d suffix"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "-d проверяет тип directory.",
      "whyEn": "The -d predicate tests whether the path resolves to a directory.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 17,
      "note": ""
    },
    {
      "id": "p-18",
      "num": 18,
      "week": 6,
      "text": "How can you run a readable script without its execute bit?",
      "choices": [
        "bash script.sh",
        "./script.sh always",
        "chmod --read script.sh",
        "cat | sudo"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Bash читает файл как input; прямой запуск требует execute permission.",
      "whyEn": "Invoking Bash explicitly reads the script without requiring an execute bit on that script.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 18,
      "note": ""
    },
    {
      "id": "p-19",
      "num": 19,
      "week": 7,
      "text": "Which command measures usage of /var/log itself?",
      "choices": [
        "du -sh /var/log",
        "df -h /var/log",
        "who /var/log",
        "uname /var/log"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "du суммирует usage выбранных объектов, df показывает filesystem.",
      "whyEn": "Du reports disk usage for the selected directory tree.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 19,
      "note": ""
    },
    {
      "id": "p-20",
      "num": 20,
      "week": 7,
      "text": "Which scheduler chooses the nearest pending cylinder request?",
      "choices": [
        "SSTF",
        "FCFS",
        "Round-robin cron",
        "DNS search"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "SSTF — shortest seek time first.",
      "whyEn": "SSTF selects the request with the shortest seek distance.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 20,
      "note": ""
    },
    {
      "id": "p-21",
      "num": 21,
      "week": 7,
      "text": "What do brackets indicate in /sys/block/sda/queue/scheduler?",
      "choices": [
        "The currently selected scheduler",
        "A filesystem error",
        "The disk password",
        "The inode number"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Активный scheduler выделяется квадратными скобками.",
      "whyEn": "The active I/O scheduler appears in brackets.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 21,
      "note": ""
    },
    {
      "id": "p-22",
      "num": 22,
      "week": 8,
      "text": "What does mounting a filesystem do?",
      "choices": [
        "Attach it to a directory in the namespace",
        "Copy every file into RAM",
        "Format the disk automatically",
        "Change every user password"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Mount присоединяет FS к дереву путей, не копирует содержимое.",
      "whyEn": "Mounting makes the filesystem available at a mount point.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 22,
      "note": ""
    },
    {
      "id": "p-23",
      "num": 23,
      "week": 8,
      "text": "Which file normally holds protected password hashes?",
      "choices": [
        "/etc/shadow",
        "/etc/passwd",
        "/etc/hosts",
        "/proc/cpuinfo"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "passwd содержит account data; hashes обычно находятся в shadow.",
      "whyEn": "Protected local password hashes are normally stored in /etc/shadow.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 23,
      "note": ""
    },
    {
      "id": "p-24",
      "num": 24,
      "week": 8,
      "text": "Which option preserves existing supplementary groups when adding membership?",
      "choices": [
        "usermod -aG",
        "usermod -G alone",
        "chmod -g",
        "groupmod -n"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "a означает append при G.",
      "whyEn": "The -a option appends to the supplementary group list when used with -G.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 24,
      "note": ""
    },
    {
      "id": "p-25",
      "num": 25,
      "week": 9,
      "text": "What remains valid after removing the original name of a hard-linked file?",
      "choices": [
        "The remaining hard link to the same inode",
        "Every symbolic link automatically retargets",
        "No references can remain",
        "The file becomes encrypted"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Удаляется имя, а не сразу inode со всеми ссылками.",
      "whyEn": "Another hard link still names the same file.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 25,
      "note": ""
    },
    {
      "id": "p-26",
      "num": 26,
      "week": 9,
      "text": "Which bit makes new objects inherit a directory’s group?",
      "choices": [
        "Setgid",
        "Sticky",
        "Owner read",
        "Setuid on the directory"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Setgid на каталоге задаёт наследование группы.",
      "whyEn": "The directory setgid bit causes group inheritance.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 26,
      "note": ""
    },
    {
      "id": "p-27",
      "num": 27,
      "week": 9,
      "text": "Named ACL permissions are rwx and the mask is r-x. What is effective?",
      "choices": [
        "r-x",
        "rwx",
        "rw-",
        "---"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Effective rights ограничены пересечением entry и mask.",
      "whyEn": "The ACL mask removes write permission from that named entry.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 27,
      "note": ""
    },
    {
      "id": "p-28",
      "num": 28,
      "week": 10,
      "text": "A page size is 4096 bytes. What is the offset of virtual address 13000?",
      "choices": [
        "712",
        "3",
        "4096",
        "13000"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "13000 mod 4096 = 712.",
      "whyEn": "The page offset is the remainder after division by page size.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 28,
      "note": ""
    },
    {
      "id": "p-29",
      "num": 29,
      "week": 10,
      "text": "Two threads both read counter=0, then each writes 1. What is this?",
      "choices": [
        "A lost update due to a race",
        "Correct atomic increment twice",
        "A filesystem mount",
        "A page offset"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Операции чтения-изменения-записи переплелись; одно обновление потеряно.",
      "whyEn": "The non-atomic read-modify-write operations interleaved and lost an update.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 29,
      "note": ""
    },
    {
      "id": "p-30",
      "num": 30,
      "week": 10,
      "text": "Does every page fault require a disk read?",
      "choices": [
        "No, some faults allocate or remap pages",
        "Yes, always",
        "Only if the process is root",
        "A page fault is a shell typo"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Возможны zero-fill, copy-on-write и другие случаи.",
      "whyEn": "Not every page fault needs disk I/O; some allocate zero-filled pages or handle copy-on-write.",
      "source": "practice",
      "set": "practice",
      "setLabel": "Course practice",
      "sourceNum": 30,
      "note": ""
    }
  ],
  "assignments": [
    {
      "name": "Assignment 1",
      "description": "VirtualBox, Ubuntu, NDG chapters 1–5, Lab 5.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=77398"
    },
    {
      "name": "Assignment 2",
      "description": "Introduction questions, NDG 6–8 and Labs 6–8.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=78269"
    },
    {
      "name": "Assignment 3",
      "description": "Archives, text, nano, streams, NDG 9–10 and Labs 9–10.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=81410"
    },
    {
      "name": "Assignment 4",
      "description": "Variables, regex, permissions and Bash; NDG 11–12.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=84741"
    },
    {
      "name": "Assignment 5",
      "description": "Targets, logs, processes, signals, nice and cron; NDG 13–14.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=86088"
    },
    {
      "name": "Assignment 6",
      "description": "Users, groups, shells and account expiry; NDG 15–16.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=88467"
    },
    {
      "name": "Assignment 7",
      "description": "Ownership, mode 750 and setgid inheritance; NDG 17.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=92857"
    },
    {
      "name": "Assignment 8",
      "description": "Hidden files, links, device files and sticky bit; NDG 18.",
      "link": "https://lms.astanait.edu.kz/mod/assign/view.php?id=94263"
    }
  ],
  "assignmentQuestions": [
    {
      "id": "a1-1",
      "num": 1,
      "assignment": 1,
      "week": 1,
      "text": "In a VirtualBox setup, which statement correctly describes the host and guest?",
      "choices": [
        "The host runs on the physical computer; the guest runs inside the VM.",
        "The guest must always be Windows.",
        "The host and guest share one kernel by definition.",
        "The host is the virtual disk file."
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Host — система настоящего компьютера; guest — ОС внутри виртуальной машины. Ubuntu в VirtualBox является гостевой системой.",
      "whyEn": "The host runs the virtualization software; the guest runs on the virtual hardware it provides.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 1
    },
    {
      "id": "a1-2",
      "num": 2,
      "assignment": 1,
      "week": 1,
      "text": "Which item normally stores an installed VirtualBox guest filesystem and its files?",
      "choices": [
        "An ISO installation image",
        "The PATH variable",
        "A VDI virtual disk",
        "The shell history list"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "VDI — виртуальный диск. ISO обычно содержит установочный носитель, а не изменяемый диск уже установленной VM.",
      "whyEn": "A VDI is a virtual disk image; an ISO normally supplies installation media.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 2
    },
    {
      "id": "a1-3",
      "num": 3,
      "assignment": 1,
      "week": 1,
      "text": "What does sudo apt update do on Ubuntu?",
      "choices": [
        "Upgrades every installed package immediately",
        "Refreshes package metadata from configured repositories",
        "Creates a new virtual machine",
        "Changes the kernel mode of every application"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "apt update обновляет сведения о доступных пакетах. Для обновления установленных пакетов нужна отдельная операция, например apt upgrade.",
      "whyEn": "apt update refreshes package indexes; it does not itself upgrade all installed software.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 3
    },
    {
      "id": "a1-4",
      "num": 4,
      "assignment": 1,
      "week": 5,
      "text": "Which command pair shows filesystem space usage and the total space used by your home directory?",
      "choices": [
        "free -h; uname -r",
        "whoami; id",
        "history; type cd",
        "df -h; du -sh \"$HOME\""
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "df показывает место на файловых системах; du считает место, занятое данными каталога. free относится к оперативной памяти.",
      "whyEn": "df reports filesystem usage; du summarizes space used by files and directories.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 4
    },
    {
      "id": "a1-5",
      "num": 5,
      "assignment": 1,
      "week": 2,
      "text": "What is printed by false && echo 'A'; echo 'B' in Bash?",
      "choices": [
        "Only B",
        "Only A",
        "A and B",
        "Nothing"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "false возвращает неуспех, поэтому echo A после && пропускается. После ; следующая echo B выполняется независимо от этого.",
      "whyEn": "The failed false command skips the right side of &&. The command after the semicolon still runs.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 5
    },
    {
      "id": "a2-1",
      "num": 6,
      "assignment": 2,
      "week": 1,
      "text": "Which pair best describes the two main roles of an operating system?",
      "choices": [
        "Text editing and web browsing",
        "Resource management and useful abstractions",
        "Compiling every program and replacing hardware",
        "Only displaying graphical windows"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "ОС распределяет CPU, память и устройства и предоставляет абстракции, например файлы и процессы, скрывая детали оборудования.",
      "whyEn": "An OS allocates hardware resources and supplies abstractions such as files and processes.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 1
    },
    {
      "id": "a2-2",
      "num": 7,
      "assignment": 2,
      "week": 1,
      "text": "What is the main additional emphasis of timesharing compared with basic multiprogramming?",
      "choices": [
        "Never switching between processes",
        "Using only one program in memory",
        "Providing short CPU turns for interactive responsiveness",
        "Removing the need for a scheduler"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Multiprogramming помогает не оставлять CPU без работы, пока задача ждёт I/O. Timesharing делает акцент на быстром ответе пользователю через короткие очереди CPU.",
      "whyEn": "Timesharing emphasizes interactive response by giving processes frequent short CPU turns.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 2
    },
    {
      "id": "a2-3",
      "num": 8,
      "assignment": 2,
      "week": 1,
      "text": "How should a user-mode application request a privileged operating-system service?",
      "choices": [
        "By performing a controlled system call",
        "By changing PS1 to #",
        "By writing the word root into a file",
        "By directly executing any privileged I/O instruction"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "System call — контролируемый вход в ядро. Изменение символа приглашения не выдаёт права и не переключает режим CPU.",
      "whyEn": "A system call enters the kernel through a controlled interface so the request can be checked.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 3
    },
    {
      "id": "a2-4",
      "num": 9,
      "assignment": 2,
      "week": 1,
      "text": "Why are direct device-control operations restricted to privileged code?",
      "choices": [
        "To prevent all applications from using files",
        "Because devices never support multiple users",
        "Because user programs cannot contain loops",
        "To prevent bypassing protection and interfering with other programs"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Прямое управление диском или другим устройством может повредить чужие данные или нарушить работу программ. ОС координирует такой доступ.",
      "whyEn": "Unrestricted device access could bypass security or corrupt shared system state, so the OS controls it.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 4
    },
    {
      "id": "a2-5",
      "num": 10,
      "assignment": 2,
      "week": 1,
      "text": "What is the defining concern of a real-time operating system?",
      "choices": [
        "Having the highest average CPU frequency",
        "Meeting timing constraints and deadlines predictably",
        "Providing the largest graphical desktop",
        "Never using interrupts"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Real-time означает предсказуемые сроки выполнения, а не просто высокую среднюю скорость. Правильный ответ, полученный слишком поздно, может быть бесполезен.",
      "whyEn": "Real-time systems focus on predictable timing and meeting required deadlines, not merely high average speed.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 5
    },
    {
      "id": "a3-1",
      "num": 11,
      "assignment": 3,
      "week": 3,
      "text": "A file has two lines: 'linux linux' and 'linux'. What do grep -c linux file and grep -o linux file | wc -l return?",
      "choices": [
        "3 and 3",
        "2 and 2",
        "2 and 3",
        "3 and 2"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "grep -c считает подходящие строки: их 2. grep -o выводит каждое совпадение отдельно: всего 3, затем wc -l считает эти три строки.",
      "whyEn": "There are two matching input lines but three non-overlapping matches.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 1
    },
    {
      "id": "a3-2",
      "num": 12,
      "assignment": 3,
      "week": 3,
      "text": "You run ls missing_file 2> errors.txt. What is redirected?",
      "choices": [
        "Standard error",
        "Standard input",
        "All output from every process",
        "Only the exit status number"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "2 — файловый дескриптор stderr. Сообщение об ошибке записывается в errors.txt, а сам exit status остаётся статусом команды.",
      "whyEn": "File descriptor 2 is stderr; the error message is written to the file.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 2
    },
    {
      "id": "a3-3",
      "num": 13,
      "assignment": 3,
      "week": 3,
      "text": "Which command appends the contents of errors.txt to list.txt?",
      "choices": [
        "cat errors.txt > list.txt",
        "cat errors.txt < list.txt",
        "cp errors.txt list.txt",
        "cat errors.txt >> list.txt"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": ">> добавляет вывод в конец, сохраняя прежние данные. > обычно обнуляет существующий файл перед записью.",
      "whyEn": "The >> redirection appends standard output rather than truncating the destination.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 3
    },
    {
      "id": "a3-4",
      "num": 14,
      "assignment": 3,
      "week": 3,
      "text": "Why does ls missing_file 2> errors.txt && cat errors.txt normally not display the saved error?",
      "choices": [
        "cat never reads text files",
        "ls returns a nonzero exit status, so && skips cat",
        "2> deletes the error message",
        "&& runs commands only when both are builtins"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "&& запускает вторую команду только при успехе первой. Для просмотра ошибки после неуспешного ls используй отдельную команду или разделитель ;.",
      "whyEn": "The failing ls command causes the && right-hand command to be skipped.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 4
    },
    {
      "id": "a3-5",
      "num": 15,
      "assignment": 3,
      "week": 3,
      "text": "What does dpkg -l | grep '^ii' | wc -l count?",
      "choices": [
        "Every file on the disk",
        "CPU cores",
        "Package records marked as installed",
        "All running processes"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Здесь фильтруются строки установленных Debian-пакетов. Один пакет может содержать много файлов: это не подсчёт файлов системы.",
      "whyEn": "The pipeline counts installed-package records, not files or processes.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 5
    },
    {
      "id": "a4-1",
      "num": 16,
      "assignment": 4,
      "week": 2,
      "text": "Which command makes MYCOURSE available to subsequently started child processes?",
      "choices": [
        "export MYCOURSE=\"OperatingSystems\"",
        "echo MYCOURSE",
        "PS1=\"MYCOURSE\"",
        "unset MYCOURSE"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "export помечает переменную для наследования дочерними процессами. Она не становится общей переменной всех процессов системы.",
      "whyEn": "Export includes the variable in the environment of subsequently started children.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 1
    },
    {
      "id": "a4-2",
      "num": 17,
      "assignment": 4,
      "week": 2,
      "text": "Why use PATH=\"$PATH:/usr/local/bin\" rather than PATH=\"/usr/local/bin\"?",
      "choices": [
        "To remove all existing command paths",
        "To store the current password",
        "To add a directory while preserving existing search paths",
        "To change the file owner"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "$PATH подставляет прежний список каталогов. Без него ты заменяешь весь список и можешь перестать находить обычные команды по имени.",
      "whyEn": "Expanding the existing PATH preserves its directories while appending the new one.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 2
    },
    {
      "id": "a4-3",
      "num": 18,
      "assignment": 4,
      "week": 3,
      "text": "For one filename per line, which regex selects names ending exactly in .log and rejects error.log.bak?",
      "choices": [
        ".log",
        "\\.log$",
        "^log",
        "log.*"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Точку экранируем, чтобы она означала точку, а не любой символ. $ требует конец строки, поэтому .log.bak не подходит.",
      "whyEn": "Escaping the dot makes it literal, and $ requires the .log suffix to occur at the end of the line.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 3
    },
    {
      "id": "a4-4",
      "num": 19,
      "assignment": 4,
      "week": 8,
      "text": "Which permission string corresponds to chmod 754 on a regular file?",
      "choices": [
        "-rwxrwxr--",
        "-rw-r-xr--",
        "-rwxr--r-x",
        "-rwxr-xr--"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "7=4+2+1=rwx; 5=4+1=r-x; 4=r--. Первый символ - обозначает обычный файл, а не ещё один permission bit.",
      "whyEn": "754 gives owner rwx, group r-x and others r--.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 4
    },
    {
      "id": "a4-5",
      "num": 20,
      "assignment": 4,
      "week": 4,
      "text": "In tar -czf backup.tar.gz project 2> errors.log && echo Done, when is Done printed?",
      "choices": [
        "Whenever the shell starts",
        "Only if errors.log is nonempty",
        "Only when tar exits successfully",
        "Only when tar fails"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "&& проверяет успешный exit status tar. 2> отдельно направляет stderr в лог; наличие или отсутствие текста в логе само по себе не заменяет статус.",
      "whyEn": "The && operator runs echo only when tar returns a successful exit status.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 5
    },
    {
      "id": "a5-1",
      "num": 21,
      "assignment": 5,
      "week": 5,
      "text": "After sleep 300 & in Bash, which expansion gives the PID of that newly started background job?",
      "choices": [
        "$$",
        "$!",
        "$?",
        "$PATH"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "$! — PID последней фоновой команды. $$ — PID оболочки, $? — exit status. В учебном опыте нужен процесс sleep, а не PID 1.",
      "whyEn": "$! identifies the most recently started asynchronous job; $$ identifies the shell.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 1
    },
    {
      "id": "a5-2",
      "num": 22,
      "assignment": 5,
      "week": 5,
      "text": "What is the difference between SIGSTOP and SIGTERM?",
      "choices": [
        "SIGSTOP suspends; SIGTERM requests termination",
        "Both always delete the program file",
        "SIGSTOP changes ownership; SIGTERM changes priority",
        "SIGTERM resumes a stopped process"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "STOP приостанавливает существующий процесс, CONT продолжает его. TERM просит завершиться. kill без указания сигнала обычно отправляет TERM.",
      "whyEn": "SIGSTOP suspends execution; SIGTERM requests termination and may be handled by the program.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 2
    },
    {
      "id": "a5-3",
      "num": 23,
      "assignment": 5,
      "week": 5,
      "text": "A process is reniced from 10 to -5. What changes?",
      "choices": [
        "It receives lower scheduling preference",
        "It is guaranteed 100% of the CPU",
        "Its PID becomes -5",
        "Its scheduling preference increases"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Чем меньше nice, тем выше предпочтение при планировании. Это не гарантия конкретного процента CPU и не изменение PID.",
      "whyEn": "Lower niceness increases scheduling preference; it does not guarantee a fixed CPU share.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 3
    },
    {
      "id": "a5-4",
      "num": 24,
      "assignment": 5,
      "week": 5,
      "text": "What does */2 * * * * mean in a user crontab?",
      "choices": [
        "Run twice per second",
        "Run once every two hours",
        "Run at every second minute",
        "Run only on the second day of each month"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Первое поле — минуты. */2 выбирает минуты через одну: например 00, 02, 04. >> в команде job сохраняет предыдущие строки файла.",
      "whyEn": "The minute field selects every second minute, while the other fields match all values.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 4
    },
    {
      "id": "a5-5",
      "num": 25,
      "assignment": 5,
      "week": 5,
      "text": "Which statement about systemctl get-default is correct?",
      "choices": [
        "It always proves which target is currently active after isolate",
        "It displays the configured default boot target",
        "It changes the target immediately",
        "It shows the PID of the current shell"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "get-default показывает настройку загрузки. isolate переключает состояние сейчас, а set-default меняет цель по умолчанию для загрузки.",
      "whyEn": "get-default reads the configured default target; it does not switch targets or necessarily describe the current isolated state.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 5
    },
    {
      "id": "a6-1",
      "num": 26,
      "assignment": 6,
      "week": 7,
      "text": "Which command adds omar to research and support without removing other supplementary memberships?",
      "choices": [
        "usermod -g research,support omar",
        "usermod -G research omar",
        "usermod -s research omar",
        "usermod -aG research,support omar"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "-G задаёт дополнительные группы, -a добавляет их к существующим. Без -a группы, не включённые в новый список, могут быть удалены из memberships.",
      "whyEn": "-aG appends supplementary memberships and preserves existing ones.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 1
    },
    {
      "id": "a6-2",
      "num": 27,
      "assignment": 6,
      "week": 7,
      "text": "Which usermod option changes nina's primary group to research?",
      "choices": [
        "-g research",
        "-G research",
        "-s research",
        "-e research"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Маленькая -g меняет primary group. Большая -G относится к supplementary groups; регистр флага важен.",
      "whyEn": "Lowercase -g selects the new primary group, which must already exist.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 2
    },
    {
      "id": "a6-3",
      "num": 28,
      "assignment": 6,
      "week": 7,
      "text": "What does usermod -e YYYY-MM-DD omar configure?",
      "choices": [
        "The username",
        "The number of CPU cores",
        "The account expiration date",
        "The default file permission mask"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Это дата истечения учётной записи. Она отличается от срока пароля и требования сменить пароль. chage -l помогает проверить настройки.",
      "whyEn": "The -e option sets account expiration, a separate setting from password expiration.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 3
    },
    {
      "id": "a6-4",
      "num": 29,
      "assignment": 6,
      "week": 7,
      "text": "How do you set and verify alex's login shell as /bin/sh?",
      "choices": [
        "chmod /bin/sh alex; ls alex",
        "usermod -s /bin/sh alex; getent passwd alex",
        "groupadd /bin/sh; id alex",
        "export alex=/bin/sh; echo alex"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "-s меняет поле login shell записи пользователя. getent passwd показывает запись, включая home и shell. Выполнение usermod требует соответствующих прав.",
      "whyEn": "usermod -s updates the login shell, and getent passwd displays the account record.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 4
    },
    {
      "id": "a6-5",
      "num": 30,
      "assignment": 6,
      "week": 7,
      "text": "Where is a local user's primary GID recorded on a typical Linux system?",
      "choices": [
        "/etc/hosts",
        "/etc/sudoers",
        "The PS1 variable",
        "/etc/passwd"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Основной GID находится в записи passwd. В /etc/group перечисляются группы и дополнительные memberships; отсутствие имени там не исключает primary membership.",
      "whyEn": "The passwd account record contains the primary GID, home directory and login shell.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 5
    },
    {
      "id": "a7-1",
      "num": 31,
      "assignment": 7,
      "week": 8,
      "text": "A directory is owned by team1:projectgroup and has mode 750. Why can an unrelated unprivileged user fail to list its contents?",
      "choices": [
        "The user receives the others permissions, which grant no access",
        "The directory must always have mode 777",
        "chmod deletes the directory contents",
        "All directories prohibit ls"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Если пользователь не owner и не подходящий group member, применяются others=---. Это ожидаемая защита. sudo у предыдущего chmod не повышает права следующего ls.",
      "whyEn": "Mode 750 grants nothing to others, so an unrelated user lacks the required directory access.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 1
    },
    {
      "id": "a7-2",
      "num": 32,
      "assignment": 7,
      "week": 8,
      "text": "A normal new file requests mode 666, with umask 027 and no default ACL. What mode results?",
      "choices": [
        "750",
        "640",
        "667",
        "777"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Umask убирает биты: у owner остаётся rw, у group убирается w и остаётся r, у others убирается всё. Итого 640, не 750: x для файла не был запрошен.",
      "whyEn": "The mask removes group write and all others permissions from 666, yielding 640.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 2
    },
    {
      "id": "a7-3",
      "num": 33,
      "assignment": 7,
      "week": 8,
      "text": "What does setgid on /home/projectX normally cause for a newly created file?",
      "choices": [
        "The file always becomes executable",
        "The file becomes owned by root",
        "The file inherits the directory group",
        "Every user automatically gains write access"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Setgid каталога управляет group inheritance. Права group write задаются отдельно обычными permission bits, umask или ACL.",
      "whyEn": "Directory setgid normally makes new files inherit its group; it does not grant group write by itself.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 3
    },
    {
      "id": "a7-4",
      "num": 34,
      "assignment": 7,
      "week": 8,
      "text": "Starting with ordinary mode 750, what mode follows chmod g+w file?",
      "choices": [
        "754",
        "752",
        "750",
        "770"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Group было 5=r-x. Добавили w=2: 5+2=7. Owner 7 и others 0 сохраняются, получается 770.",
      "whyEn": "Adding group write changes group r-x to rwx while preserving the other ordinary bits.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 4
    },
    {
      "id": "a7-5",
      "num": 35,
      "assignment": 7,
      "week": 8,
      "text": "What does execute permission mean on a directory?",
      "choices": [
        "Permission to traverse/search the directory",
        "Permission to run every file inside it regardless of file permissions",
        "Permission to change its owner",
        "Permission to compress the directory"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "x каталога позволяет проходить по пути и обращаться к именам внутри него при соблюдении прочих прав. r позволяет читать список имён, а w связан с изменением записей.",
      "whyEn": "Directory execute permission permits traversal and searching for entries, rather than executing the directory as a program.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 5
    },
    {
      "id": "a8-1",
      "num": 36,
      "assignment": 8,
      "week": 9,
      "text": "After original.txt is removed, why can link_hard.txt still show its data while link_sym.txt becomes dangling?",
      "choices": [
        "Both links contain independent full copies",
        "The hard link still names the same inode; the symlink stores the removed pathname",
        "A symlink always needs sudo to read",
        "Deleting a file deletes every hard link automatically"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Hard link — ещё одно имя того же файла; удаление одного имени не удаляет остальные. В symlink хранится путь к original.txt, которого больше нет.",
      "whyEn": "A remaining hard link keeps the inode reachable, while the symbolic link no longer resolves its stored target path.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 1
    },
    {
      "id": "a8-2",
      "num": 37,
      "assignment": 8,
      "week": 9,
      "text": "Does naming a file .config_note protect it from other users?",
      "choices": [
        "Yes, dotfiles are encrypted",
        "Yes, ls -a removes other users' access",
        "No, the dot only affects normal listing conventions",
        "Yes, every dotfile automatically has mode 600"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Точка скрывает имя из обычного ls, но не назначает права. Доступ определяется permissions и каталогами по пути; ls -a показывает скрытые имена.",
      "whyEn": "A leading dot conventionally hides a name from ordinary listings; it is not access control.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 2
    },
    {
      "id": "a8-3",
      "num": 38,
      "assignment": 8,
      "week": 9,
      "text": "What is /proc on a typical Linux system?",
      "choices": [
        "A directory containing only compressed archives",
        "The default home directory for every user",
        "The physical partition table",
        "A virtual filesystem exposing process and kernel information"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "/proc предоставляет текущие сведения о процессах и ядре через интерфейс файлов. Это не обычный набор документов, записанных на диск.",
      "whyEn": "procfs exposes kernel and process information through a virtual filesystem interface.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 3
    },
    {
      "id": "a8-4",
      "num": 39,
      "assignment": 8,
      "week": 9,
      "text": "In ls -l /dev output, what do the initial type letters b and c indicate?",
      "choices": [
        "Block and character devices",
        "Backup and compressed files",
        "Binary and configuration files",
        "Boot and cache directories"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Первая буква — тип объекта. b обозначает block device, например диск; c — character device, например терминал или /dev/null. Следующие символы показывают права.",
      "whyEn": "b identifies a block device node and c identifies a character device node.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 4
    },
    {
      "id": "a8-5",
      "num": 40,
      "assignment": 8,
      "week": 9,
      "text": "What does the sticky bit on a writable shared directory primarily restrict?",
      "choices": [
        "Reading all files in the directory",
        "Deleting or renaming another user's entries, subject to owner/privileged exceptions",
        "Changing all file contents regardless of file mode",
        "Creating any files at all"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Sticky ограничивает удаление и переименование записей: это могут делать владелец файла, владелец каталога или привилегированный процесс. Права на чтение и изменение содержимого файлов регулируются отдельно.",
      "whyEn": "Sticky restricts entry removal and renaming; it does not itself make file contents read-only or private.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 5
    },
    {
      "id": "a1-6",
      "num": 41,
      "assignment": 1,
      "week": 1,
      "text": "Which file is normally used to transfer a virtual appliance with its configuration and disk images?",
      "choices": [
        "A shell history file",
        "An OVA archive",
        "A PATH directory",
        "A plain permission string"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "OVA переносит готовую виртуальную машину с описанием конфигурации и образами дисков. Это отличается от ISO-носителя для установки ОС.",
      "whyEn": "An OVA packages a virtual appliance, including its configuration and associated disk images.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 6
    },
    {
      "id": "a1-7",
      "num": 42,
      "assignment": 1,
      "week": 1,
      "text": "What does uname -r display inside an Ubuntu VM?",
      "choices": [
        "The number of installed packages",
        "The physical disk serial number",
        "The currently running guest kernel release",
        "The password of the host user"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Команда запускается внутри гостевой ОС и сообщает релиз её работающего ядра. Это не версия VirtualBox и не число пакетов.",
      "whyEn": "uname -r reports the release of the kernel running in the environment where the command executes.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 7
    },
    {
      "id": "a1-8",
      "num": 43,
      "assignment": 1,
      "week": 5,
      "text": "Which command displays a summary of RAM and swap rather than filesystem disk usage?",
      "choices": [
        "free -h",
        "df -h",
        "du -sh .",
        "pwd"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "free -h показывает оперативную память и swap. df и du относятся к месту на файловых системах и размерам файлов.",
      "whyEn": "free summarizes memory and swap; df and du describe filesystem space usage.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 8
    },
    {
      "id": "a1-9",
      "num": 44,
      "assignment": 1,
      "week": 2,
      "text": "Why is cd normally a shell builtin?",
      "choices": [
        "Because directories are executable programs",
        "Because it must run on a separate computer",
        "Because it always requires root",
        "Because it must change the working directory of the current shell"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Если отдельный дочерний процесс изменит свой каталог, каталог родительской оболочки от этого не изменится. Поэтому cd выполняет сама оболочка.",
      "whyEn": "A child cannot change its parent shell's working directory; cd must affect the shell itself.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 9
    },
    {
      "id": "a1-10",
      "num": 45,
      "assignment": 1,
      "week": 2,
      "text": "In Bash, what does echo '$USER' print?",
      "choices": [
        "The current username",
        "The literal text $USER",
        "The current user ID number",
        "Nothing, because single quotes cause an error"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Одинарные кавычки сохраняют текст буквально: переменная не раскрывается. echo \"$USER\" с двойными кавычками, наоборот, подставит её значение.",
      "whyEn": "Single quotes suppress variable expansion, so the dollar sign and variable name are printed literally.",
      "note": "Practice question based on Assignment 1; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 1",
      "sourceNum": 10
    },
    {
      "id": "a2-6",
      "num": 46,
      "assignment": 2,
      "week": 1,
      "text": "Which example illustrates a possible trade-off between performance and protection?",
      "choices": [
        "Removing every process from memory improves isolation",
        "A faster clock automatically provides stronger access control",
        "Additional validation can improve protection while adding overhead",
        "Protection and performance are always identical goals"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Проверки доступа и изоляция требуют работы. Они защищают систему, но могут добавлять накладные расходы — это пример возможного конфликта целей.",
      "whyEn": "Validation and isolation improve protection but can require additional processing work.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 6
    },
    {
      "id": "a2-7",
      "num": 47,
      "assignment": 2,
      "week": 1,
      "text": "On a single CPU core, how can timesharing make several interactive programs appear to progress together?",
      "choices": [
        "By rapidly switching CPU execution between them",
        "By executing all their instructions at exactly the same instant",
        "By removing every timer interrupt",
        "By giving every program permanent ownership of the CPU"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "На одном ядре инструкции задач чередуются во времени. Быстрые переключения создают ощущение одновременной работы; буквальный параллелизм требует дополнительных вычислительных ресурсов.",
      "whyEn": "Timesharing interleaves execution using short CPU turns, providing concurrency without requiring simultaneous execution on one core.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 7
    },
    {
      "id": "a2-8",
      "num": 48,
      "assignment": 2,
      "week": 1,
      "text": "Which statement correctly distinguishes a program from a process?",
      "choices": [
        "A program is always privileged; a process never is",
        "A process is only a file name",
        "A program cannot have more than one running instance",
        "A program is stored instructions; a process is a running instance with state"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Один сохранённый executable может запускаться несколько раз. Каждый выполняющийся экземпляр имеет своё состояние, например PID и ресурсы.",
      "whyEn": "A process is an executing instance of a program, with execution state and allocated resources.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 8
    },
    {
      "id": "a2-9",
      "num": 49,
      "assignment": 2,
      "week": 1,
      "text": "Does running an application as root mean all its instructions execute in kernel mode?",
      "choices": [
        "Yes, UID 0 is the CPU kernel-mode bit",
        "No, root user identity and CPU execution mode are different concepts",
        "Yes, sudo permanently turns the shell into the kernel",
        "No, root applications cannot make system calls"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Root — привилегированная учётная запись, kernel mode — режим CPU. Даже root-приложение обычно исполняет свой код в user mode и обращается к ядру через контролируемые интерфейсы.",
      "whyEn": "Root is an account privilege level; kernel mode is a processor execution mode. They are distinct.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 9
    },
    {
      "id": "a2-10",
      "num": 50,
      "assignment": 2,
      "week": 1,
      "text": "Why is a file an operating-system abstraction?",
      "choices": [
        "It is always a physical disk sector",
        "It removes the need for permissions",
        "It lets programs work with named data without controlling raw disk details",
        "It guarantees that every read accesses a physical disk"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Программа открывает файл по имени и читает данные, не управляя дорожками или секторами. Данные также могут быть в кэше, поэтому read не всегда вызывает физическое чтение диска.",
      "whyEn": "The file interface hides low-level storage details behind a convenient named-data object.",
      "note": "Practice question based on Assignment 2; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 2",
      "sourceNum": 10
    },
    {
      "id": "a3-6",
      "num": 51,
      "assignment": 3,
      "week": 2,
      "text": "You are in /home/alex/projects and Music is in /home/alex. Which command changes to Music and prints its path only if the change succeeds?",
      "choices": [
        "cd ../Music && pwd",
        "cd Music || pwd",
        "pwd ../Music",
        "cd /Music && history"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": ".. обозначает родительский каталог. Из projects путь ../Music ведёт в /home/alex/Music. && запускает pwd только при успешном cd.",
      "whyEn": "The relative path ../Music starts from the parent directory, and && checks that cd succeeded.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 6
    },
    {
      "id": "a3-7",
      "num": 52,
      "assignment": 3,
      "week": 3,
      "text": "A task says to type python3 my and press TAB. What should you actually do?",
      "choices": [
        "Type the literal characters <TAB> into the filename",
        "Add TAB to the Python source code",
        "Press the Tab key to ask the shell to complete a matching filename",
        "Run a program named TAB before Python"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "TAB в инструкции обозначает действие клавишей. Shell дополняет имя, если может определить подходящее совпадение, а не добавляет текст <TAB> в команду.",
      "whyEn": "Tab completion is an interactive shell action, not literal command text or Python syntax.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 7
    },
    {
      "id": "a3-8",
      "num": 53,
      "assignment": 3,
      "week": 3,
      "text": "Which grep option makes a search ignore uppercase/lowercase differences?",
      "choices": [
        "-v",
        "-c",
        "-o",
        "-i"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "-i включает поиск без учёта регистра. -v выбирает несовпавшие строки, -c считает строки, -o выводит сами совпадения.",
      "whyEn": "grep -i performs case-insensitive matching; the other options affect selection or output format.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 8
    },
    {
      "id": "a3-9",
      "num": 54,
      "assignment": 3,
      "week": 4,
      "text": "What does tar -czf project.tar.gz project combine?",
      "choices": [
        "Only file ownership changes",
        "Archiving with gzip compression",
        "Only a symbolic-link operation",
        "A process-priority change"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "tar объединяет файлы в архив; -z подключает gzip-сжатие; -f указывает имя архива. Архивирование и сжатие — разные операции, которые здесь используются вместе.",
      "whyEn": "tar creates an archive, -z compresses it with gzip, and -f names the archive file.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 9
    },
    {
      "id": "a3-10",
      "num": 55,
      "assignment": 3,
      "week": 3,
      "text": "In command1 | command2, which stream is normally connected to command2?",
      "choices": [
        "The exit status integer of command1",
        "Both stdout and stderr automatically",
        "Standard output of command1",
        "The entire shell history"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Обычный pipe передаёт stdout первой команды на stdin второй. Stderr остаётся отдельным потоком, пока его явно не перенаправили.",
      "whyEn": "A normal pipeline connects the first command's stdout to the next command's stdin.",
      "note": "Practice question based on Assignment 3; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 3",
      "sourceNum": 10
    },
    {
      "id": "a4-6",
      "num": 56,
      "assignment": 4,
      "week": 2,
      "text": "When does Bash normally display the PS2 continuation prompt?",
      "choices": [
        "When a command needs more input, such as an unclosed quote",
        "Whenever the current user becomes root",
        "Only when a second CPU is installed",
        "Whenever an alias is deleted"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "PS1 — основное приглашение. PS2 появляется, когда команда ещё не закончена: например, не закрыта кавычка или ожидается продолжение конструкции.",
      "whyEn": "PS2 is the continuation prompt used when the shell needs more input to complete a command.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 6
    },
    {
      "id": "a4-7",
      "num": 57,
      "assignment": 4,
      "week": 3,
      "text": "In the regex ^r.*/bin/bash$, what do ^ and $ require?",
      "choices": [
        "The same word must occur twice",
        "The line must contain exactly one character",
        "The command must run as root",
        "The match starts at the line beginning and ends at the line end"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "^ привязывает начало, $ — конец строки. Здесь строка должна начинаться с r и заканчиваться /bin/bash, а .* допускает промежуточные символы.",
      "whyEn": "The anchors constrain the match to the beginning and end of the line.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 7
    },
    {
      "id": "a4-8",
      "num": 58,
      "assignment": 4,
      "week": 2,
      "text": "Where can a personal alias be saved so future interactive Bash sessions normally load it?",
      "choices": [
        "/proc/meminfo",
        "~/.bashrc",
        "/dev/null",
        "The kernel release string"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "alias в текущей сессии обычно временный. Запись в ~/.bashrc позволяет новым интерактивным Bash-сеансам загрузить определение. Уже открытой оболочке нужно применить его отдельно.",
      "whyEn": "The user's .bashrc is normally read by interactive non-login Bash shells and is a common place for personal aliases.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 8
    },
    {
      "id": "a4-9",
      "num": 59,
      "assignment": 4,
      "week": 4,
      "text": "What does chmod +x hello.sh followed by ./hello.sh normally accomplish?",
      "choices": [
        "Compiles the script into the kernel",
        "Changes the script owner",
        "Makes the script executable and runs it from the current directory",
        "Copies the script to every PATH directory"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "chmod добавляет execute bit. ./ означает текущий каталог: shell не обязан искать текущую папку в PATH. Для выполнения также нужны корректный script/interpreter и доступ по пути.",
      "whyEn": "The execute bit allows direct execution, and ./ explicitly refers to the current directory.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 9
    },
    {
      "id": "a4-10",
      "num": 60,
      "assignment": 4,
      "week": 3,
      "text": "What does grep -rl --include='*.sh' 'echo' project | wc -l count for ordinary filenames without embedded newlines?",
      "choices": [
        "Matching .sh filenames, one per matching file",
        "Every occurrence of echo across the entire system",
        "The total size of project",
        "Only lines that contain no echo"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "-r ищет рекурсивно, --include ограничивает имена, -l выводит имя каждого подходящего файла один раз. Поэтому считаются файлы, а не все строки или совпадения внутри них.",
      "whyEn": "grep -l prints one name for each matching file; wc -l counts those names.",
      "note": "Practice question based on Assignment 4; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 4",
      "sourceNum": 10
    },
    {
      "id": "a5-6",
      "num": 61,
      "assignment": 5,
      "week": 5,
      "text": "Which command selects journal entries from the current boot?",
      "choices": [
        "journalctl --every-process",
        "history -b",
        "journalctl -b",
        "uname -b"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "-b выбирает загрузку; без дополнительного идентификатора или смещения это текущая загрузка. Это журнал событий, а не история shell-команд.",
      "whyEn": "journalctl -b filters the journal to the current boot by default.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 6
    },
    {
      "id": "a5-7",
      "num": 62,
      "assignment": 5,
      "week": 5,
      "text": "ps -p 1 shows systemd in your VM. What does that identify?",
      "choices": [
        "The PID of the most recently started sleep command",
        "The first userspace process in that PID namespace",
        "The CPU with the highest utilization",
        "A program that must be stopped for every assignment"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "PID 1 в этой VM — systemd, системный процесс. Для опыта с сигналами используй PID своего sleep из $!, а не системный PID 1.",
      "whyEn": "PID 1 identifies the namespace's initial userspace process; in this VM that process is systemd.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 7
    },
    {
      "id": "a5-8",
      "num": 63,
      "assignment": 5,
      "week": 5,
      "text": "What is the best interpretation of runlevel: command not found?",
      "choices": [
        "The runlevel utility is unavailable or not found through PATH",
        "The system cannot have any active systemd target",
        "The kernel has stopped executing",
        "The current account was deleted"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Сообщение относится к поиску команды, а не доказывает отсутствие target. В systemd-системе можно исследовать targets через systemctl.",
      "whyEn": "A missing command is a utility or command-search issue, not proof that systemd has no active targets.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 8
    },
    {
      "id": "a5-9",
      "num": 64,
      "assignment": 5,
      "week": 5,
      "text": "After adding a job, what does crontab -l alone prove?",
      "choices": [
        "The job has already executed successfully",
        "The output file contains the expected message",
        "The job runs every second",
        "The crontab contains the configured entry"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "crontab -l показывает настройки. Чтобы подтвердить запуск, нужно дождаться времени и проверить реальный вывод или журнал; одна запись этого не доказывает.",
      "whyEn": "Listing the crontab verifies configuration, while actual execution requires output or log evidence.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 9
    },
    {
      "id": "a5-10",
      "num": 65,
      "assignment": 5,
      "week": 5,
      "text": "Which termination signal cannot be caught by a process for cleanup?",
      "choices": [
        "SIGTERM",
        "SIGKILL",
        "SIGCONT",
        "SIGHUP"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "SIGKILL принудительно завершает процесс и не может быть обработан программой. SIGTERM — запрос завершиться, который программа может обработать для очистки.",
      "whyEn": "SIGKILL cannot be caught or handled; SIGTERM may allow the program to perform cleanup.",
      "note": "Practice question based on Assignment 5; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 5",
      "sourceNum": 10
    },
    {
      "id": "a6-6",
      "num": 66,
      "assignment": 6,
      "week": 7,
      "text": "What does useradd -m alex request in addition to creating the account?",
      "choices": [
        "Creating a virtual machine",
        "Setting the niceness value to -m",
        "Creating the user's home directory",
        "Changing all file groups to alex"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "Флаг -m запрашивает создание домашнего каталога. Пароль настраивается отдельно через passwd; создание аккаунта не доказывает успешный password login.",
      "whyEn": "The -m option requests creation of the new account's home directory.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 6
    },
    {
      "id": "a6-7",
      "num": 67,
      "assignment": 6,
      "week": 7,
      "text": "Why can nina belong to research as her primary group even if her name is absent from that group's member list in /etc/group?",
      "choices": [
        "The primary GID is recorded in her account record",
        "Primary groups never affect access checks",
        "Every user belongs to every group",
        "/etc/group lists running processes"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Основной GID хранится в записи passwd. Список участников group в основном используется для дополнительных memberships; проверь id nina и запись аккаунта.",
      "whyEn": "Primary membership is determined by the account's primary GID, not only the group file's explicit member list.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 7
    },
    {
      "id": "a6-8",
      "num": 68,
      "assignment": 6,
      "week": 7,
      "text": "After changing a user's supplementary groups, why might an already running shell still lack the new group?",
      "choices": [
        "Group names are case-insensitive passwords",
        "usermod changes only file sizes",
        "The kernel must always be reinstalled",
        "Existing processes keep their current credentials; a new login session normally gets the updated groups"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Изменение базы аккаунтов не обновляет автоматически credentials всех запущенных процессов. Новый login-сеанс получает актуальные группы; newgrp может создать сеанс с другой активной группой.",
      "whyEn": "An existing process retains its credentials; a new login normally loads updated supplementary memberships.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 8
    },
    {
      "id": "a6-9",
      "num": 69,
      "assignment": 6,
      "week": 7,
      "text": "What is the distinction between passwd alex and groupadd research?",
      "choices": [
        "Both set the same primary GID",
        "passwd changes account password data; groupadd creates a group",
        "passwd creates a group; groupadd changes a login shell",
        "Both only display existing accounts"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "passwd управляет паролем пользователя. groupadd создаёт группу; это не та же операция, что назначить пользователю членство в ней.",
      "whyEn": "Password management, group creation and group membership are separate administrative operations.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 9
    },
    {
      "id": "a6-10",
      "num": 70,
      "assignment": 6,
      "week": 7,
      "text": "An account expires 30 days after 18 October 2026. Which date is that?",
      "choices": [
        "18 November 2026",
        "30 October 2026",
        "17 November 2026",
        "17 December 2026"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "От 18 октября до 31 октября — 13 дней, затем ещё 17 дней ноября: 13+17=30. date -d вычисляет дату относительно выбранного дня.",
      "whyEn": "Adding thirty days to 18 October gives 17 November: thirteen remaining October days plus seventeen November days.",
      "note": "Practice question based on Assignment 6; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 6",
      "sourceNum": 10
    },
    {
      "id": "a7-6",
      "num": 71,
      "assignment": 7,
      "week": 8,
      "text": "A file starts with ordinary mode 750, then chmod g+w file and chmod 750 file are run. What is its final ordinary mode?",
      "choices": [
        "750",
        "770",
        "777",
        "752"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Первый вызов делает group=rwx и mode=770. Второй числовой chmod снова задаёт 750, убирая group write. Последняя команда определяет итог.",
      "whyEn": "The numeric chmod resets the ordinary mode to 750 after the earlier symbolic addition.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 6
    },
    {
      "id": "a7-7",
      "num": 72,
      "assignment": 7,
      "week": 8,
      "text": "Which command changes both owner and group of report.txt to team1 and projectgroup?",
      "choices": [
        "chmod team1:projectgroup report.txt",
        "groupadd report.txt",
        "export report.txt=team1",
        "chown team1:projectgroup report.txt"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "chown owner:group меняет владельца и группу при достаточных полномочиях. chmod меняет биты прав, а не имена владельца и группы.",
      "whyEn": "chown accepts the owner:group form; chmod instead changes permission bits.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 7
    },
    {
      "id": "a7-8",
      "num": 73,
      "assignment": 7,
      "week": 8,
      "text": "You enabled setgid on a protected directory and created inherited.txt as team1. What best verifies the new file's group without opening the directory to everyone?",
      "choices": [
        "chmod 777 the directory before every check",
        "Run stat or ls with an authorized identity, such as sudo stat on the file",
        "Assume it worked because no command was printed",
        "Use echo to change the group name"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Проверяй фактические метаданные с достаточными правами. Permission denied у обычного ls не показывает группу нового файла и не требует ослаблять mode каталога.",
      "whyEn": "Use an authorized metadata check to see the new file's group without weakening directory permissions.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 8
    },
    {
      "id": "a7-9",
      "num": 74,
      "assignment": 7,
      "week": 8,
      "text": "A new directory requests mode 777 with umask 027 and no default ACL. Which mode results?",
      "choices": [
        "640",
        "777",
        "750",
        "027"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "У owner остаётся rwx; у group убирается w и остаётся r-x; у others убирается всё. Получается 750. Для обычного файла стартовый mode обычно 666, поэтому результат другой.",
      "whyEn": "Applying the creation mask to 777 removes group write and all others bits, yielding 750.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 9
    },
    {
      "id": "a7-10",
      "num": 75,
      "assignment": 7,
      "week": 8,
      "text": "Does changing umask to 027 automatically change the permissions of existing files?",
      "choices": [
        "No, umask affects creation; use chmod to change existing modes",
        "Yes, all existing files immediately become 640",
        "Yes, every directory becomes 027",
        "Yes, all owners become root"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "Umask влияет на запрашиваемые права при создании новых объектов. Уже существующие файлы не пересчитываются автоматически: их mode меняют chmod.",
      "whyEn": "The creation mask applies to new objects; it does not retroactively rewrite existing permission bits.",
      "note": "Practice question based on Assignment 7; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 7",
      "sourceNum": 10
    },
    {
      "id": "a8-6",
      "num": 76,
      "assignment": 8,
      "week": 9,
      "text": "Why can a symbolic link point across filesystems while a normal hard link cannot?",
      "choices": [
        "Symbolic links encrypt their target",
        "A hard link always has two owners",
        "Hard links contain the target's full file contents",
        "A symlink stores a pathname; a hard link refers to an inode in one filesystem"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "Symlink хранит путь, который может вести на другую файловую систему. Hard link — имя inode внутри конкретной FS; одного номера inode вне этой FS недостаточно.",
      "whyEn": "A pathname can cross mount boundaries, while hard links refer to an inode within a single filesystem.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 6
    },
    {
      "id": "a8-7",
      "num": 77,
      "assignment": 8,
      "week": 9,
      "text": "If you edit a file through its hard-link name, what does the original name normally show?",
      "choices": [
        "An independent unchanged backup",
        "The same modified data",
        "A random copy from another filesystem",
        "An encrypted version of the old content"
      ],
      "answer": 1,
      "correctAnswers": [
        1
      ],
      "whyRu": "Два hard-link имени относятся к одному файлу. Изменение содержимого видно через оба имени: hard link не является независимой резервной копией.",
      "whyEn": "Both names refer to the same inode and file data, so an in-place edit is visible through either name.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 7
    },
    {
      "id": "a8-8",
      "num": 78,
      "assignment": 8,
      "week": 9,
      "text": "What does chmod 700 /tmp/test_session do?",
      "choices": [
        "Makes all contained files world-readable",
        "Deletes the directory at logout",
        "Grants directory rwx to the owner and no ordinary group/others permissions",
        "Sets the sticky bit"
      ],
      "answer": 2,
      "correctAnswers": [
        2
      ],
      "whyRu": "700=владелец rwx, группа --- и остальные ---. Это закрывает обычный доступ по пути другим пользователям, но не исключает привилегированный доступ.",
      "whyEn": "Mode 700 restricts ordinary directory access to its owner; it does not set a special sticky bit.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 8
    },
    {
      "id": "a8-9",
      "num": 79,
      "assignment": 8,
      "week": 9,
      "text": "Which long-listing permission string corresponds to a directory with mode 1775?",
      "choices": [
        "drwxrwxr-t",
        "drwxrwxrwt",
        "drwxr-s---",
        "-rw-r-----"
      ],
      "answer": 0,
      "correctAnswers": [
        0
      ],
      "whyRu": "1 — sticky; 775 даёт owner/group rwx и others r-x. Sticky при execute у others отображается как t, поэтому drwxrwxr-t. 1777 отличался бы записью для others.",
      "whyEn": "1775 combines sticky with 775, producing drwxrwxr-t rather than the 1777 string drwxrwxrwt.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 9
    },
    {
      "id": "a8-10",
      "num": 80,
      "assignment": 8,
      "week": 9,
      "text": "Why does a listing of drwxrwxrwt alone not fully demonstrate sticky-bit deletion behavior?",
      "choices": [
        "Because sticky bits never apply to directories",
        "Because the listing removes the sticky bit",
        "Because files have no owners",
        "It shows the configured bit, but a behavioral test needs another user attempting to remove a file they do not own"
      ],
      "answer": 3,
      "correctAnswers": [
        3
      ],
      "whyRu": "ls подтверждает установленный mode. Для демонстрации поведения нужны разные владельцы и попытка удалить чужую запись, учитывая права и исключения.",
      "whyEn": "Metadata verifies configuration; demonstrating enforcement requires an appropriate cross-user deletion test.",
      "note": "Practice question based on Assignment 8; prepared for revision, not an original midterm/endterm question.",
      "source": "assignment",
      "set": "assignments",
      "setLabel": "Assignment 8",
      "sourceNum": 10
    }
  ]
};
