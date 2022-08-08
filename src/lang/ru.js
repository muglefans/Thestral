const messages = {
  msg: {
    title: 'Thestral кошелек',
    password: 'Пароль',
    passwordAgain: 'Введите пароль повторно',
    wrongPassword: 'Неверный пароль',
    login_: 'Войти',
    logout: 'Выйти',
    search: 'Поиск',
    clearup: 'Очистить',
    jump: 'Перейти',

    confirmed: 'Подтверждено',
    unconfirmed: 'Не подтверждено',
    locked: 'Заблокировано',
    
    send: 'Отправить',
    receive: 'Получить',

    cancel:'Отменить',
    save: 'Сохранить',

    welcome: 'Добро пожаловать в Thestral кошелек',
    
    msg: 'Сообщение',
    more: 'Больше',

    back: 'отступать',
    
    remote: 'remote',
    local: 'local',

    node: 'Node',
    remoteNode: 'Remote node',
    localNode: 'Local node',

    other: 'Others',
    loading: 'Updating status from Mugle node ...',
    waitForLocalGnode: 'Wait for local mugle node to start',

    error: 'Error',
    login: {
      walletExist: 'Данные mugle кошелька найдены; Войти с оригинальным паролем :-)',
    },
    
    create:{
      seedPhrase: 'Сид-фраза',
      toNewMsg: 'Кошелек не найден. Создать новый',
      newWallet: 'Создать новый кошелек',
      backupNote: 'Сделайте бекап！Пожалуйста, сохраните вашу сид-фразу, без нее вы не сможете восстановить кошелек',
      backupFinish: 'Ok, I backed up my seed phrase. Close wallet, then open it again',
      errorPasswdEmpty: 'Поле пароля не может быть пустым',
      errorPasswdConsistency: 'Пароли не совпадают',
      errorCreateFailed: 'Ошибка при создании нового кошелька. Попробуйте перезапустить кошелек и попробуйте снова.',
    },

    new_:{
      create: 'Создать новый кошелек',
      restore: 'Восстановить кошелек с помощью сид фразы',
      import: 'Импортить бекап файл кошелька'
    },
    
    restore:{
      seedPhrase: 'Сид-фраза',
      title: 'Восстановление кошелька с помощью сид-фразы',
      addSeedsInfo: 'Пожалуйста, введите слова по одному',
      add: 'Добавить',
      invalid: 'Сид-фраза недействительна',
      failed: 'Recover wallet from seeds Failed',
      delete: 'Удалить',
      added: 'Ввод сид-фразы завершен',
      newPassword: 'Установить новый пароль',
      recover: 'Восстановить',
      reAdd: 'Ввести сид-фразу повторно ',
      recovered: 'Кошелек восстановлен, пришло время проверить баланс',
      restoring: 'Проверка займет 10-30 минут. Пожалуйста, будьте терпеливы..',
      restored: 'Кошелек восстановлен, баланс проверен.',
      login: 'Close Wallet, then Open it again to Login',
    },

    app:{
      create: 'Создать файл транзакции',
      finalize: 'Заверишть',
      httpSend: 'Отправить через http/https/Tor',
      createRespFile: 'Создать ответный файл транзакции',
      httpReceive: 'Получить по http',
      height:'Высота',
      updateTitle: 'Найдена новая версия',
      updateMsg: 'Найдена новая версия Thestral кошелка. Обновить прямо сейчас?',
      yes: 'Да',
      no: 'Нет',
      hedwig: 'Получить через Hedwig',
      tor: 'Tor Network'
    },

    info: {
      spendable: 'Расходуемые',
      total: 'Всего',
      unfinalization: 'Hезаконченный',
      immature: 'Hезрелый'
    },

    txs:{
      tx: 'Транзакции',
      canceled:'Отмененные',
      noTxFound: 'Транзакции не найдены',
      noTx:'Нет транзакций',
      cancelSuccess:'Эта транзакция отменена',
    },

    commit:{
      unspentCmt: 'Неизрасходованный вывод транзакции',
      heightCreated: 'Высота блока при создании',
      unspent: 'Неизрасходованный',
      spent: 'Израсходованный',
      noCmtFound: 'No Unspent Output Commit Found',
      noCmt:'No Unspent Output Commit',
    },

    fileSend:{
      sendAmount: 'Сумма для отправки',
      createTxFile: 'Создать новый файл транзакции',
      WrongAmount: 'Неверная сумма',
      saveMsg: 'Сохранить созданный файл транзакции',
      CreateFailed: 'Не удалось создать новый файл транзакции',
      NotEnough: 'Недостаточно средств. Оставьте 0.01 для комиссии'
    },

    httpSend:{
      sendAmount: 'Сумма для отправки',
      address:'Адрес',
      WrongAmount: 'Неверная сумма',
      NotEnough: 'Недостаточно средств. Оставьте 0.01 для комиссии',
      WrongAddress: 'Неверный адрес',
      WrongTxData: 'Не удалось создать транзакцию',
      success: 'Успешная транзакция',
      TxFailed: 'Ошибка отправки транзакции',
      TxResponseFailed: 'Failed to get right respose from receiver',
      salteVersion: 'Версия Slate файла',
      salteVersionHelp: 'Если вам не удалось отправить Mugle, попробуйте изменить версию Slate файла'
    },

    fileReceive: {
      dropMsg: 'Удалить полученный файл транзакции',
      WrongFileType: 'Неверный тип файла транзакции',
      saveMsg: 'Сохранить созданный файл ответа',
      CreateFailed: 'Не удалось создать новый файл ответной транзакции',
      NoSavePlace: 'Пожалуйста, выберите место для сохранения',
    },

    finalize: {
      finalize: 'Завершить',
      success: 'Успешная транзакция',
      ok:'OK',
      sending: 'Отправка',
      dropMsg: 'Удалить файл транзакции ответа для завершения',
      WrongFileType: 'Неверный тип файла транзакции',
      TxFailed: 'Ошибка транзакции',
    },

    httpReceive: {
      launchSucess: 'Успешный запуск',
      listening: "Процесс прослушивания HTTP кошелька запущен",
      address: 'Адрес кошелька',
      reachableMsg2: 'Убедитесь, что ваш IP доступен для других пользователей интернет-сети (Публичный IP)',
      close: 'Прекратить прослушивание',
      attention: 'Внимание',
      reachableMsg: 'Чтобы начать прослушивание HTTP, у вас должен быть публичный IP, доступный для пользователей интернет-сети.',
      password: 'Пароль кошелька (используется для запуска HTTP-прослушивания)',
      start: 'Запустить',
      error: 'Нет пароля',
      failed: 'Не удалось запустить, возможно введен неверный пароль',
      failed2: 'Сбой при прослушивании HTTP, ваш публичный IP недоступен для других пользователей. Попробуйте использовать отправку файла транзакции или Hedwig.',
      failed3: 'Не удалось получить ваш публичный IP; попробуйте позже',
      failed4: 'Localhost http listen is running(http://127.0.0.1:6815). However, your public ip could not reachable by internet user. Try trascation file Or Hedwig.',
      ip: 'Ваш публичный IP'
    },

    hedwig: {
      title: 'Получить через Hedwig(v1)',
      launchSucess: 'Успешный запуск',
      reachable: 'Hedwig адрес доступен',
      address: 'Адрес для получения',
      tip:'Пожалуйста, держите кошелек онлайн.',
      close: 'Остановить Hedwig',
      introTitle: 'Введение',
      intro1: 'Hedwig(v1) представляет из себя ретранслятор для пользователей без публичного IP, предоставляя временный адрес для получения Mugle.',
      intro2: 'Когда кто-то отправляет Mugle на адрес, Hedwig(v1) перешлет отправку запроса на ваш кошелек. Таким образом, вы получите свои Mugle.',
      start: 'Запустить',
      failed: 'Ошибка при попытке подключиться к серверу Hedwig, попробуйте позже.',
      failed2: 'Ошибка при проверке адреса Hedwig, попробуйте позже или перезапустите кошелек.',
      failed3: 'Ошибка при запуске локального сервиса получения Mugle, попробуйте позже или перезапустите кошелек.',
      copy: 'Скопировать адрес',
      copied: 'Адрес был скопирован в буфер обмена'
    },

    check: {
      title: 'Проверить баланс',
      checking: 'Проверяю, ожидайте ...',
      stop: 'Остановить проверку',

      tip:'Проверка занимает 10-30 минут',
      introTitle: 'Введение',

      intro1: 'Из-за всех возможностей, доступных для отмены, а также вероятных форков цепи, вполне возможно, что ваш кошелек окажется в несовместимом состоянии',
      intro2: "По этой причине Mugle предоставляет команду проверки вручную, которая сканирует набор UTXO-цепочки для любых выходов, принадлежащих вашему кошельку, и обеспечивает их соответствие с вашей локальной базой данных кошелька.",
      
      start: 'Запуск',
      stopCheckMsg: 'Проверка была прервана'
    },
    
    lang: {
      title: 'Выберите язык',
      lang: 'язык',
      select: 'Выбрать'
    },

    gnode:{
      title: 'Local mugle node',
      tabStatus: 'Status',
      tabPeers: 'Peers',
      tabLog: 'Log',
      tabConfig: 'Settings',
      statusRunning: 'Running, Available',
      statusSyncing: 'Syncing ...',
      statusToStart: 'not Running',
      status:'Status',
      localRemoteHeight: 'Local Height/Networking Height',
      nodeVersion: 'Node Version',
      protocolVersion: 'Protocol Version',
      connectedCount: 'Connected Peers',
      location: 'Location where mugle blockchain data store',
      size: 'Size of mugle blockchain data',
      restart: 'Restart mugle node',
      height: 'height'
    },

    gnodeConfig:{
      warning: 'For General users, default setting is preferred!',
      useLocalorNot: '(Recommend)Use local mugle node',
      connectMethod: 'Connect Method',
      remoteFirst: 'Remote mugle node is preferred, When remote node is not available, use local node.',
      localFirst:  '(Recommend)Local mugle node is preferred when it is synced. Otherwise, use remote node.',
      remoteAllTime: 'Use remote all the time',
      localAllTime: 'Use local all the time',
      background: '(Recommend)Running mugle node background when Thestral is closed.',
      restoreToDefault: 'Restore to default setting',
      saved: 'Settings was saved, Restart Thestral to take effect.'
    },

    gnodeConfigModal:{
      config: 'Mugle Local Node Settings',
      title: 'Mugle node settings'
    },

    remove:{
      title: 'Remove Current Wallet',
      warning: 'Warning !',
      info: 'Before you remove current wallet, Make sure there is no mugle in this wallet or You write down the Seed Phrase !',
      help: 'Enter "remove" into the input box below to confirm',
      remove: 'Remove',
      success: 'Current wallet was removed. Click "OK" to restart Thestral.'
    },

    tor:{
      title: 'Tor',
      tabStatus: 'Status',
      tabLog: 'Log',
      tabConfig: 'Setting',
      statusRunning: 'Tor Running',
      statusFailed: 'Tor Start Failed',
      statusStarting: 'Tor Starting',
      statusToStart: 'Not Running',
      status:'Status',
      start: 'start',
      restart: 'restart',
      address: 'Tor address to receive mugle',
      
      tip: 'Please keep wallet online When receving mugle',
      tip2: 'Starting ... it may take 10-60 seconds',
      introTitle: 'Introduction',
      intro1: 'Tor is free and open-source software for enabling anonymous communication.',
      intro2: 'Receive/send mugle via tor is more anonymous/sercurity/decentralized',
      intro3: '(If Tor is blocked by network in your location, Configure a https/socks proxy first.)',

      copy: 'Copy Address',
      copied: 'copied',
      startWhenLaunch: '(Recommend) Auto start Tor after open wallet',
      proxy: 'proxy',
      proxyUser: 'user',
      proxyPassword: 'password',
      proxyHelp: 'Connect Tor network via proxy',
      optional: 'optional',
      proxyHelp2: 'Proxy example: https://127.0.0.1:9009 or socks5://127.0.0.1:1080',

      error: 'Start Tor network failed.',
      errorNoCurl: 'No curl found. Install curl first.',
      errorNoTor: 'No tor found. Install tor first.',
      errorInvalidProxy: 'Invalid proxy',
      saved: 'Setting saved. will use this setting when start Tor next time.s'
    },
    log: {
      title: 'Export Log',
      saveMsg: "Export today's Thestral wallet log.",
    }
  }
}
export default messages
