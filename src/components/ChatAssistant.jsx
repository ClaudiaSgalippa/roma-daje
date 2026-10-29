import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { MessageCircle, X, Send, Bot, RotateCcw, Minus } from 'lucide-react'
import './ChatAssistant.css'

const STORAGE_KEY = 'roma-daje-chat'
const OPEN_DELAY = 300

const suggestedQuestions = [
  'Che versioni esistono?',
  'Quanto costa Er Sampietrino?',
  'Quanto costa la spedizione?',
  'Come funziona il regalo?',
  'Parlami di Er Sampietrino',
]

const welcomeMessage =
  'Aò, benvenutə! 👋 So’ Er Bot de Roma, daje. Che te serve? Vedemo de risolve.'

// Recupera la conversazione salvata nel browser
function loadChat() {
  const initialState = {
    isOpen: false,
    isMinimized: false,
    message: '',
    messages: [
      {
        id: 1,
        sender: 'bot',
        text: welcomeMessage,
      },
    ],
    pendingReplies: [],
  }

  try {
    const savedChat = localStorage.getItem(STORAGE_KEY)

    if (!savedChat) return initialState

    const parsedChat = JSON.parse(savedChat)

    // Controlla che i messaggi salvati siano validi
    if (
      !Array.isArray(parsedChat.messages) ||
      parsedChat.messages.length === 0 ||
      !parsedChat.messages.every(
        (item) =>
          item &&
          (item.sender === 'bot' || item.sender === 'user') &&
          typeof item.text === 'string'
      )
    ) {
      return initialState
    }

    // Recupera le risposte ancora in attesa
    const pendingReplies = Array.isArray(
      parsedChat.pendingReplies
    )
      ? parsedChat.pendingReplies.filter(
          (item) =>
            item &&
            typeof item.text === 'string' &&
            typeof item.id === 'number'
        )
      : []

    return {
      isOpen: parsedChat.isOpen === true,
      isMinimized: parsedChat.isMinimized === true,
      message:
        typeof parsedChat.message === 'string'
          ? parsedChat.message
          : '',
      messages: parsedChat.messages,
      pendingReplies,
    }
  } catch {
    return initialState
  }
}

function getBotReply(message) {
  const text = message.toLowerCase().trim()

  // Tutte le versioni disponibili
  if (
    text.includes('version') ||
    text.includes('varianti') ||
    text.includes('modelli') ||
    text.includes('quali sampietrini') ||
    text.includes('che sampietrini')
  ) {
    return 'Aò, ce stanno quattro versioni de Er Sampietrino! 😎\n\nEr Classico — Roma, senza fronzoli. Essenziale e autentico.\n\nEr Magna — Trastevere. Una piccola macchia rossastra, ricordo delle serate finite a magnà.\n\nEr Verde — Garbatella. Un tocco de verde tra le fessure.\n\nEr Vissuto — Centro. Un sottile segno sulla superficie, perché ogni storia lascia er segno.\n\nQuale te rappresenta de più?'
  }

  // Zone e identità delle versioni
  if (
    text.includes('quartier') ||
    text.includes('zone') ||
    text.includes('dove si trovano') ||
    text.includes('dove si trova') ||
    text.includes('dove sono') ||
    text.includes('luoghi') ||
    text.includes('località')
  ) {
    return 'Ogni versione c’ha la sua identità romana! 📍\n\nEr Classico — ROMA, SENZA FRONZOLI: non è legato a una zona specifica.\n\nEr Magna — Trastevere: ispirato alle serate finite a magnà.\n\nEr Verde — Garbatella: dedicato alla Roma più nascosta e piena de verde.\n\nEr Vissuto — Centro di Roma: porta con sé i segni e le storie della città.\n\nTre riferimenti a zone della città e un classico che rappresenta Roma in generale!'
  }

  // Er Classico
  if (text.includes('classico')) {
    return 'Er Classico è la versione essenziale, autentica e orgogliosamente romana. La sua identità? ROMA, SENZA FRONZOLI. Poche chiacchiere, tanta romanità. ✨'
  }

  // Er Magna
  if (text.includes('magna') || text.includes('trastevere')) {
    return 'Er Magna è ispirato a Trastevere! Una piccola macchia rossastra, ricordo delle serate finite a magnà. Perché a Roma, prima o poi, se finisce sempre a tavola. 🍷'
  }

  // Er Verde
  if (text.includes('verde') || text.includes('garbatella')) {
    return 'Er Verde è ispirato alla Garbatella 🌿. Un tocco de verde tra le fessure, dedicato a chi ama la Roma più nascosta.'
  }

  // Er Vissuto
  if (
    text.includes('vissuto') ||
    text.includes('centro storico')
  ) {
    return 'Er Vissuto è ispirato al Centro di Roma. C’ha un sottile segno sulla superficie: qualche storia in più da raccontà, senza perde er fascino. 🏛️'
  }

  // Spedizione
  if (
    text.includes('spedizion') ||
    text.includes('consegna') ||
    text.includes('trasporto')
  ) {
    return 'La spedizione costa 4,90€. Ma se arrivi a 99€ di ordine, è gratis! Aò, almeno questa è una cosa che funziona a Roma 😎'
  }

  // Regalo
  if (
    text.includes('regalo') ||
    text.includes('omaggio') ||
    text.includes('nasone') ||
    text.includes('borraccia')
  ) {
    return 'Da 99€ di ordine ricevi in regalo la nostra borraccia a forma di nasone! Perché l’acqua è importante, ma berla alla romana è mejo. 💧'
  }

  // Prezzo
  if (
    text.includes('prezzo') ||
    text.includes('costa') ||
    text.includes('quanto')
  ) {
    return 'Er Sampietrino costa 59,90€. Un piccolo pezzo de Roma, senza doverlo raccattare per strada. 😉'
  }

  // Informazioni generali sul prodotto
  if (
    text.includes('prodotto') ||
    text.includes('sampietrino') ||
    text.includes('oggetto')
  ) {
    return 'Er Sampietrino è il nostro omaggio ironico a Roma: un prodotto per chi se porta un po’ de città pure a casa. Ce stanno quattro versioni, ognuna con la sua identità romana: Er Classico, Er Magna, Er Verde ed Er Vissuto!'
  }

  // Saluti
  if (
    text.includes('ciao') ||
    text.includes('salve') ||
    text.includes('buongiorno') ||
    text.includes('buonasera')
  ) {
    return 'Aò, ciao! 👋 Benvenutə su Roma, daje. Che te serve?'
  }

  // Ringraziamenti
  if (text.includes('grazie')) {
    return 'Ma figurate! ❤️ Semo qua apposta. Daje!'
  }

  return 'Aò, questa ancora me manca! 😅 Prova a chiedermi delle versioni, delle zone di Roma, del prezzo, della spedizione o del regalo.'
}

function ChatAssistant() {
  // Inizializza lo stato recuperando i dati salvati
  const [initialChat] = useState(loadChat)

  const [isOpen, setIsOpen] = useState(initialChat.isOpen)
  const [isMinimized, setIsMinimized] = useState(
    initialChat.isMinimized
  )
  const [message, setMessage] = useState(initialChat.message)
  const [messages, setMessages] = useState(initialChat.messages)
  const [pendingReplies, setPendingReplies] = useState(
    initialChat.pendingReplies
  )

  // Controlla quando rendere visibile la finestra
  const [isWindowVisible, setIsWindowVisible] = useState(false)

  // Riferimenti agli elementi della chat
  const chatWindowRef = useRef(null)
  const chatLauncherRef = useRef(null)
  const chatMessagesRef = useRef(null)

  // Tiene traccia dei timer delle risposte
  const replyTimersRef = useRef(new Map())

  // Evita di recuperare due volte le stesse risposte
  const recoveryDoneRef = useRef(false)

  // Annulla tutti i timer delle risposte in attesa
  function cancelPendingTimers() {
    replyTimersRef.current.forEach((timerId) => {
      clearTimeout(timerId)
    })

    replyTimersRef.current.clear()
  }

  // Ritarda l'apertura e poi avvia l'animazione
  useEffect(() => {
    if (!isOpen || isMinimized) {
      setIsWindowVisible(false)
      return
    }

    setIsWindowVisible(false)

    const timerId = setTimeout(() => {
      setIsWindowVisible(true)
    }, OPEN_DELAY)

    return () => {
      clearTimeout(timerId)
    }
  }, [isOpen, isMinimized])

  // Minimizza la chat quando si tocca fuori, solo su mobile
  useEffect(() => {
    if (!isOpen || isMinimized) return

    function handleOutsidePointer(event) {
      const isMobile = window.matchMedia(
        '(max-width: 767px)'
      ).matches

      if (!isMobile) return

      if (chatWindowRef.current?.contains(event.target)) {
        return
      }

      if (chatLauncherRef.current?.contains(event.target)) {
        return
      }

      setIsMinimized(true)
    }

    document.addEventListener(
      'pointerdown',
      handleOutsidePointer
    )

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleOutsidePointer
      )
    }
  }, [isOpen, isMinimized])

  // Recupera subito le risposte interrotte da un reload
  useEffect(() => {
    if (recoveryDoneRef.current) return

    recoveryDoneRef.current = true

    if (initialChat.pendingReplies.length === 0) return

    const recoveredMessages = initialChat.pendingReplies.map(
      (item) => ({
        id: Date.now() + Math.random(),
        sender: 'bot',
        text: getBotReply(item.text),
      })
    )

    setMessages((previous) => [
      ...previous,
      ...recoveredMessages,
    ])

    setPendingReplies([])
  }, [initialChat])

  // Salva lo stato aggiornato della chat
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isOpen,
          isMinimized,
          message,
          messages,
          pendingReplies,
        })
      )
    } catch {
      // La chat continua a funzionare anche senza salvataggio
    }
  }, [isOpen, isMinimized, message, messages, pendingReplies])

  // Scorre automaticamente fino all'ultimo messaggio
  useLayoutEffect(() => {
    if (isOpen && !isMinimized) {
      requestAnimationFrame(() => {
        const container = chatMessagesRef.current

        if (container) {
          container.scrollTop = container.scrollHeight
        }
      })
    }
  }, [messages, isOpen, isMinimized])

  // Invia la domanda e programma la risposta del bot
  function sendMessage(textToSend = message) {
    const text = textToSend.trim()

    if (!text) return

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text,
    }

    const nextMessages = [...messages, userMessage]

    const nextPendingReplies = [
      ...pendingReplies,
      {
        id: userMessage.id,
        text,
      },
    ]

    setMessages(nextMessages)
    setPendingReplies(nextPendingReplies)
    setMessage('')

    // Salva subito domanda e risposta in attesa
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isOpen,
          isMinimized,
          message: '',
          messages: nextMessages,
          pendingReplies: nextPendingReplies,
        })
      )
    } catch {
      // La chat continua a funzionare anche senza salvataggio
    }

    const timerId = setTimeout(() => {
      replyTimersRef.current.delete(userMessage.id)

      const botMessage = {
        id: Date.now(),
        sender: 'bot',
        text: getBotReply(text),
      }

      setMessages((previous) => [
        ...previous,
        botMessage,
      ])

      setPendingReplies((previous) =>
        previous.filter(
          (item) => item.id !== userMessage.id
        )
      )
    }, 900)

    replyTimersRef.current.set(userMessage.id, timerId)
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage()
  }

  // Azzera la conversazione e annulla le risposte in attesa
  function resetChat() {
    cancelPendingTimers()

    const welcome = {
      id: Date.now(),
      sender: 'bot',
      text: welcomeMessage,
    }

    setMessages([welcome])
    setPendingReplies([])
    setMessage('')
    setIsMinimized(false)

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isOpen,
          isMinimized: false,
          message: '',
          messages: [welcome],
          pendingReplies: [],
        })
      )
    } catch {
      // La chat continua a funzionare anche senza salvataggio
    }
  }

  // Chiude la chat e azzera la conversazione
  function closeChat() {
    resetChat()
    setIsOpen(false)
  }

  return (
    <div className="chat-assistant">
      {isOpen && !isMinimized && (
        <section
          ref={chatWindowRef}
          className={`chat-window ${
            isWindowVisible ? 'chat-window--visible' : ''
          }`}
          aria-label="Chat con Er Bot de Roma"
        >
          <header className="chat-header">
            <div className="chat-avatar">
              <Bot size={24} />
            </div>

            <div className="chat-header-info">
              <h2>Er Bot de Roma</h2>
              <span>
                <span className="chat-status-dot" />
                L'assistente de Roma, daje.
              </span>
            </div>

            <button
              className="chat-close"
              type="button"
              onClick={resetChat}
              aria-label="Ricomincia la chat"
              title="Ricomincia la chat"
            >
              <RotateCcw size={19} />
            </button>

            <button
              className="chat-close"
              type="button"
              onClick={() => setIsMinimized(true)}
              aria-label="Riduci la chat"
              title="Riduci la chat"
            >
              <Minus size={21} />
            </button>
          </header>

          <div
            className="chat-messages"
            aria-live="polite"
            ref={chatMessagesRef}
          >
            {messages.map((item) => (
              <div
                key={item.id}
                className={`chat-message chat-message--${item.sender}`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="chat-suggestions">
              <p>CHIEDIME PURE</p>

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <form
            className="chat-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Scrivi un messaggio..."
              aria-label="Scrivi un messaggio"
              maxLength={500}
            />

            <button
              type="submit"
              disabled={!message.trim()}
              aria-label="Invia messaggio"
            >
              <Send size={18} />
            </button>
          </form>

          <p className="chat-disclaimer">
            Assistente dimostrativo · Risposte automatiche
          </p>
        </section>
      )}

      <button
        ref={chatLauncherRef}
        type="button"
        className={`chat-launcher ${
          isOpen && !isMinimized
            ? 'chat-launcher--open'
            : ''
        }`}
        onClick={() => {
          if (isOpen && !isMinimized) {
            closeChat()
          } else if (isMinimized) {
            setIsMinimized(false)
          } else {
            setIsOpen(true)
            setIsMinimized(false)
          }
        }}
        aria-label={
          isOpen && !isMinimized
            ? 'Chiudi e resetta la chat'
            : 'Apri la chat'
        }
        aria-expanded={isOpen && !isMinimized}
      >
        {isOpen && !isMinimized ? (
          <X size={25} />
        ) : (
          <MessageCircle size={25} />
        )}
      </button>
    </div>
  )
}

export default ChatAssistant