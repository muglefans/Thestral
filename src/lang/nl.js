const messages = {
  msg: {
    title: 'Thestral Wallet (portemonnee)',
    password: 'Paswoord',
    passwordAgain: 'Paswoord opnieuw ingeven a.u.b.',
    wrongPassword: 'Mugle owner Api proces start niet, het paswoord is mogelijk fout',
    login_: 'Aanmelden',
    logout: 'Afmelden',
    search: 'Zoeken',
    clearup: 'Opruimen',
    jump: 'Overslaan',

    confirmed: 'Bevestigd',
    unconfirmed: 'Niet bevestigd',
    locked: 'Vergrendeld',

    send: 'Zenden',
    receive: 'Ontvangen',

    cancel: 'Annuleren',
    save: 'Bewaren',
    welcome: 'Welkom bij Thestral',
    msg: 'Bericht',
    more: 'Meer',
    back: 'Terug',

    remote: 'remote',
    local: 'lokaal',

    node: 'Mugle Node',
    remoteNode: 'Remote Mugle node',
    localNode: 'Lokale Mugle node',

    other: 'Andere',

    loading: 'Mugle node status aan het updaten ...',
    error: 'Fout',
    optional: 'Optioneel',
    open: 'Open',
    close: 'Sluiten',

    address: 'Slatepack adres',

    login: {
      walletExist: 'Bestaande Mugle wallet gegevens gevonden; a.u.b. inloggen met het originele paswoord :-)',
      waitForLocalGnode: 'Aan het wachten tot de lokale Mugle node gestart is',
      selectingGnode: 'Selectie van Mugle node',
      gnode: 'Mugle node'
    },

    remove:{
      title: 'Huidige Wallet (portemonnee) verwijderen',
      warning: 'Opgepast !',
      info: 'Voordat u de wallet verwijderd, zorg ervoor dat er geen Mugle meer in deze wallet zit, of dat je de woordensleutl kent (recovery phrase) !',
      help: '"Verwijder" ingeven in het onderstaande veld om te bevestigen',
      remove: 'Verwijder',
      success: 'De huidige wallet is verwijderd, a.u.b. Thestral herstarten.'
    },

    new_:{
      create: 'Nieuwe wallet (portemonnee)',
      restore: 'Wallet herstellen d.m.v. woorden sleutel (recovery phrase)',
      import: 'Wallet backup bestand importeren'
    },

    create:{
      toNewMsg: 'Geen wallet gevonden. Laten we een nieuwe wallet aanmaken :-).',
      seedPhrase: 'Woorden sleutel (Recovery Phrase)',
      newWallet: 'Nieuwe wallet',
      backupNote: 'Belangrijk! De woordensleutel (recovery phrase) noteren om later je wallet te kunnen herstellen',
      backupFinish: 'De backup is compleet. Sluit de wallet, en opnieuw openen en inloggen.',
      errorPasswdEmpty: 'Het paswoord mag niet leeg zijn',
      errorPasswdConsistency: 'Het paswoord moet hetzelfde zijn',
      errorCreateFailed: 'Er is een fout opgetreden bij het aanmaken van de wallet. A.u.b. Thestral herstarten of later opnieuw proberen.',
    },

    restore:{
      seedPhrase: 'Sleutelwoorden (Recovery Phrase)',
      title: 'De wallet herstellen d.m.v. de sleutelwoorden',
      addSeedsInfo: 'A.u.b. één voor één de sleutelwoorden ingeven',
      add: 'Toevoegen',
      invalid: 'Ongeldige Sleutelwoorden',
      failed: 'Het is niet gelukt om de wallet te herstellen met de sleutelwoorden',
      delete: 'Wissen',
      added: 'Alle sleutelwoorden zijn ingevoerd',
      newPassword: 'Een nieuw paswoord ingeven',
      recover: 'Herstellen',
      reAdd: 'De sleutelwoorden opnieuw ingeven',
      recovered: 'De wallet is succesvol hersteld, er wordt gestart met het synchroniseren van de wallet met de Mugle blockchain.',
      restoring: 'Dit kan 10 tot 30 minuten in beslag nemem. De wallet a.u.b. niet sluiten. Even geduld ...',
      restored: 'De wallet is succesvol hersteld, en de syncronisatie met de Mugle blockchain is compleet',
      login: 'A.u.b. Thestral herstarten en inloggen.',
    },

    app:{
      create: 'Aanmaken Slatepack',
      finalize: 'Finaliseren',
      httpSend: 'Verzenden via http/https',
      createRespFile: 'Antwoord Slatepack aanmaken',
      httpReceive: 'Open http ontvangst poort',
      height: 'Hoogte',
      updateTitle: 'Er is een nieuwe versie gevonden',
      updateMsg: 'Een nieuwe versie van Nifflet is gevonden. A.u.b. onmiddelijk updaten!(Downloaden en het originele programma overschrijven).',
      yes: 'Verder gaan om updaten',
      no: 'Voorlopig niet updaten',

      hedwig: 'Ontvangen via Hedwig',
      tor: 'Tor Netwerk',
      address: 'Slatepack adres',
    },

    info:{
      spendable: 'Besteedbaar',
      total: 'Totaal',
      unfinalization: 'Niet gefinaliseerd',
      immature: 'In verwerking'
    },

    txs:{
      tx: 'Transacties',
      canceled: 'Annuleren',
      noTxFound: 'Geen transacties gevonden',
      noTx: 'Geen transacties',
      cancelSuccess: 'Transactie succesvol geannuleerd',
    },

    commit:{
      unspentCmt: 'Onbestede uitgaande transacties',
      heightCreated: 'Blokhoogte bij aanmaak',
      unspent: 'Onbesteed',
      spent: 'Uitgegeven',
      noCmtFound: 'Geen onbestede output gevonden',
      noCmt: 'Geen onbestede output toegewezen',
      copied: 'Gekopieerd'
    },

    fileSend:{
      sendAmount: 'Te verzenden bedrag',
      createTxFile: 'Create Slatepack',
      WrongAmount: 'Verkeerde hoeveelheid',
      WrongSlatepackAddress: 'Foutief Slatepack adres',
      saveMsg: 'Slatepack als bestand opslaan',
      CreateFailed: 'Fout bij het aanmaken van een nieuwe Slatepack',
      NotEnough: 'Onvoldoende mugle in je wallet, er is ten minste 0.01 mugle nodig voor de transactie vergoeding.',

      slatepack: 'SLATEPACK',
      slatepackAddress: 'Slatepack adress van de ontvanger',
      slatepackAddressTips: 'Slatepack adres is gebruikt om de transactie te encrypteren en het aanmaken van het betaalbewijs.',
      slatepackCreated: 'Slatepack is aangemaakt !',

      slatepackEncryptedTips: 'Deze Slatepack is gencrypteerd. Het is veilig om dit te transferren in alle kanalen.',
      slatepackUnEncryptedTips: 'Deze Slatepack is niet gencrypteerd, alleen verzenden over een beveiligd kanaal.',
      copySlatepack: 'Kopiëren',
      fileSlatepack: 'Slatepack opslaan als bestand',
      copied: 'Gekopieerd'
    },

    httpSend:{
      sendAmount: 'Te verzenden bedrag',
      sendMessage: 'Bericht',
      optional: 'optioneel',
      address:'Zend adres',
      WrongAmount: 'Verkeerde hoeveelheid',
      NotEnough: 'Onvoldoende mugle in je wallet, er is ten minste 0.01 mugle nodig voor de transactie vergoeding.',
      WrongAddress: 'Fout send adres',
      WrongTxData: 'Fout bij het aanmaken van de transactie',
      success: 'De transactie is successvol',
      TxFailed: 'Fout bij het verzenden van de transactie',
      TxResponseFailed: 'De ontvanger heeft niet correct geantwoord',
      TxCreateFailed: 'Fout bij het aanmaken van de transactie',
      salteVersion: 'Slate bestand versie',
      salteVersionHelp: 'Als het verzenden van mugle mislukt is, probeer dan de Slate betand versie te wijzigen en opnieuw verzenden',
      noTor: 'Het Tor netwerk is niet actief, dit moet je eerst starten.',   
    },

    fileReceive: {
      dropMsg: 'Sleep het ontvangen transactie bestand (Drag & Drop)',
      saveMsg: 'Bewaar het de net aangemaakte Slatepack antwoord',
      CreateFailed: 'Fout bij het aanmaken van het Slatepack antwoord',
      NoSavePlace: 'Kies a.u.b. de locatie om het bestand op te slaan',
      WrongFileType: 'Foutief transactie bestandtype',
      toOpen: 'Open Slatepack bestand',
      toPaste: 'of kopieer Slatepack, en daarna plakken in onderstaand veld',
      create: 'Slatepack antwoord aanmaken',
      WrongSlatepack: 'Foutieve Slatepack inhoud',
      openMsg: 'Slatepack bestand openen',
      sender: 'Verzender',
      slatepackCreated: 'Antwoord Slatepack is aankemaakt!',
      copySlatepack: 'Kopiëren',
      fileSlatepack: 'Opslsan als bestand',
      copied: 'Gekopieerd',
    },

    finalize: {
      finalize: 'Finaliseren Finalize',
      success: 'Succesvolle transactie',
      ok: 'OK',
      sending: 'Bezig met verzenden',
      dropMsg: 'Drop antwoord transactie bestand om te finaliseren',
      WrongFileType: 'Foutief transactie bestandtype',
      WrongSlatepack: 'Foutieve Slatepack inhoud',
      TxFailed: 'Transactie is mislukt',
      toPaste: 'of kopieer Slatepack, en daarna plakken in onderstaand veld',
      toOpen: 'Slatepack bestand openen',
      send: 'Finaliseren en transactie verzenden',
      openMsg: 'Slatepack bestand openen'
    },

    httpReceive: {
      launchSucess: 'Succesvol opgestart',
      listening: "Wallet HTTP poort is aan het luisteren",
      address: 'Wallet Addres',
      reachableMsg2: 'Zorg ervoor dat uw IP addres beschikbaar is voor externe gebruikers',
      close: 'Stop HTTP luisteren',
      attention: 'Opgepast',
      reachableMsg: 'Om HTTP luisteren te starten, moet je een publiek IP adres hebben, dat bereikbaar is op het internet.',
      password: 'Wallet Passwoord (nodig om HTTP luisteren te starten)',
      start: 'Start',
      error: 'Geen passwoord ingegeven.',
      failed: 'Start is niet gelukt, mogelijk is het paswoord fout',
      failed2: 'HTTP luisteren is mislukt, uw publiek IP addres is niet beschikbaar op het internet. Gebruik transactie bestanden of de Hedwig methode om Mugle te zenden en ontvangen.',
      failed3: 'Onmogelijk om uw IP addres te bekomen, probeer later opnieuw',
      failed4: 'Lokaal HTTP luisteren is actief (http://127.0.0.1:6815). Maar, uw publiek IP addres is niet beschikbaar vanaf het internet. Gebruik transactie bestanden of de Hedwig methode.',
      ip: 'Uw publiek IP adres'
    },

    hedwig: {
      title: 'Ontvangen via Hedwig(v1)',
      launchSucess: 'Succesvol opgestart',
      reachable: 'Tijdelijk Hedwig address is beschikbaar',
      address: 'Ontvangst adres',
      tip: 'Uw wallet moet online blijven gedurende het ontvangen van Mugle.',
      close: 'Stop Hedwig',
      introTitle: 'Introductie',
      intro1: 'Hedwig(v1) is een proxy service voor gebruikers zonder een publiek IP adres. Het zorgt voor een tijdelijk IP adres om Mugle te ontvangen.',
      intro2: 'Wanneer iemand Mugle naar dit adres stuurt, stuurt Hedwig(v1) dit verzoek door naar je Thestral wallet om de transactie af te ronden.',
      start: 'Starten',
      failed: 'Er is een fout opgetreden bij het verbinden met de Hedwig server. Probeer later opnieuw.',
      failed2: 'Er is een fout opgetreden bij het verbinden met het Hedwig adres. Herstart de wallet of probeer later opnieuw.',
      failed3: 'De Lokale Mugle onvanger service start niet. Herstart de wallet of probeer later opnieuw.',
      copy: 'Adres kopiëren',
      copied: 'Het adres is gekopieerd naar het klemmenbord'
    },

    check: {
      title: 'Saldo controle',
      checking: 'Synchronisatie is bezig, even geduld...',
      stop: 'Stop controle',


      tip: 'Dit kan 10 tot 30 minuten duren',
      introTitle: 'Introductie',

      intro1: 'Wannneer de lokale wallet saldo inconsitent is met het saldo op de Mugle blockchain (door bv. een transactie te annuleren of een transactie of verzendprobleem, enz.), kan je de "Saldo controle" functie gebruiken.',
      intro2: 'Gedurende de controle, onder alle onuitgegeven outputs (UTXO) van the Mugle blockchain, zoek je onuitgegeven outputs die je weer kan toevoegen aan je saldo.',
      
      start: 'Synchronisatie starten',
      stopCheckMsg: 'De Synchronisatie is geannuleerd',
      checkedMsg: 'Saldo synchronisatie uitgevoerd'
    },

    lang: {
      title: 'Kies een taal',
      lang: 'Taal',
      select: 'Kiezen'
    },

    gnode:{
      title: 'Lokale Mugle node',
      tabStatus: 'Status',
      tabPeers: 'Peers',
      tabLog: 'Log',
      tabConfig: 'Instellingen',
      statusRunning: 'In dienst, beschikbaar',
      statusSyncing: 'Synchronisatie is bezig ...',
      statusToStart: 'Niet gestart',
      status: 'Status',
      localRemoteHeight: 'Lokale Hoogte/Netwerk Hoogte',
      nodeVersion: 'Node versie',
      protocolVersion: 'Protocol versie',
      connectedCount: 'Verbonden Peers',
      location: 'Blockchain opslag locatie',
      size: 'Full node block data grootte',
      restart: 'Lokale mugle node herstarten',
      height: 'Hoogte',
      remove: 'Huidige mugle blockchain data verwijderen en synchroniseren vanaf nul',
      removeConfirm: 'Ben u zeker dat u de huidige mugle blockchain gegevens wenst te verwijderen?'
    },

    gnodeConfig:{
      warning: 'Voor normaal gebruik, gebruik de aangeraden instellingen!',
      useLocalorNot: '(Aangeraden) Gebuik een lokale mugle node',
      connectMethod: 'Node connectie methode',
      remoteFirst: 'Gebruik eerst een remote Mugle node. Wanneer de remote node niet beschikbaar is, gebuik een lokale node.',
      localFirst:  '(Aangeraden) Wanneer de lokale node is gesynchroniseerd, wordt de lokale node als eerste gebruikt, en de remote node indien noodzakelijk.',
      remoteAllTime: 'Altijd verbinden met de remote mugle node (snelste)',
      localAllTime: 'Altijd verbinden met de lokale mugle node (veiligste)',
      background: '(Aangeraden) De mugle node in de achtergrond laten werken wanneer na het sluiten van Thestral.',
      restoreToDefault: 'Standaard instellingen terugzetten',
      saved: 'De instellingen zijn opgeslagen maar zullen pas van toepassing zijn na het herstarten van de wallet.'
    },

    gnodeConfigModal:{
      config: 'Lokale mugle node instellingen',
      title: 'Mugle node instellingen'
    },

    tor:{
      title: 'Tor',
      tabStatus: 'Status',
      tabLog: 'Log',
      tabConfig: 'Instellingen',
      statusRunning: 'Tor is actief',
      statusFailed: 'Fout bij opstarten van Tor',
      statusStarting: 'Tor is aan het opstarten',
      statusToStart: 'Tor is niet actief',
      status: 'Status',
      start: 'start',
      restart: 'Herstarten',
      address: 'Tor addres om Mugle te onvangen',
      
      tip: 'Uw wallet moet online blijven gedurende het ontvangen van Mugle.',
      tip2: 'Bezig met opstarten .. dit kan 30-60 seconden duren',
      introTitle: 'Introductie',
      intro1: 'Tor is een vrije en open-source software voor anonieme communicatie.',
      intro2: 'Ontvangen/zenden van Mugle via Tor is anoniem, veilig en decentraal',
      intro3: '(Indien Tor niet toegelaten is op uw netwerk, configureer dan eerst een HTTPS/SOCKS5 proxy.)',

      copy: 'Adres kopiëren',
      copied: 'Het adres is gekopieerd naar het klemmenbord',
      startWhenLaunch: '(Aangeraden) Automatisch starten van tor bij het openen van de wallet',
      proxy: 'proxy',
      proxyUser: 'gebruikersnaam',
      proxyPassword: 'paswoord',
      proxyHelp: 'Met Tor verbinden via een proxy',
      optional: 'Optioneel',
      proxyHelp2: 'Proxy voorbeeld: https://127.0.0.1:9009 of socks5://127.0.0.1:1080',

      error: 'Fout bij het opstarten van het Tor netwerk.',
      errorNoCurl: 'Het curl commando is niet gevonden, a.u.b. eerst cURL installeren.',
      errorNoTor: 'Tor is niet gevonden, a.u.b. eerst Tor installeren.',
      errorInvalidProxy: 'Ongeldige proxy',
      saved: 'De instellingen zijn opgeslagen maar zullen pas van toepassing zijn na het herstarten van de wallet.'
    },

    gaddress:{
      address: 'Uw Slatepack adres',
      copied: 'Gekopieerd',
      copy: 'Slatepack adres kopiëren',
      tips: 'Het Slatepack adres wordt gebruikt om de transactie te encrypteren en een betalinsgbewijs aan te maken. Het is niet bewaard in de Mugle blockchain.'
    },

    log: {
      title: 'Logbestand exporteren',
      saveMsg: "Thestral wallet logbestand van vandaag exporteren.",
    }

  }
}
export default messages
