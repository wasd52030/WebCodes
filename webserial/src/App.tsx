import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import serialLogo from './assets/serial.svg'
import p5jsLogo from './assets/p5js.svg'
import './App.css'
import Trigger from './components/Trigger';

function App() {
  const [baudRate, setBaudRate] = useState(9600)
  const [serialData, setSerialData] = useState({
    bufferArr: new Uint8Array(),
    text: ''
  })
  const commonBuadRate = [300, 1200, 2400, 9600, 19200, 38400, 115200]

  useEffect(() => { console.log(serialData) }, [serialData])
  

  const changeBuadRate = (buadrate: number) => setBaudRate(buadrate)

  const serialController = async () => {
    console.log(baudRate)

    if ('serial' in navigator) {
      const port = await navigator.serial.requestPort()
      await port.open({ baudRate: baudRate })

      const reader = port.readable.getReader()
      const writer = port.writable.getWriter()

      try {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            reader.releaseLock();
            break;
          }
          await writer.write(value)

          setSerialData({
            bufferArr: value,
            text: new TextDecoder('ascii').decode(value).trim()
          })
        }
      } catch (error) {
        console.error(error)
      } finally {
        reader.releaseLock();
        await port.close();
      }
    } else {
      alert('瀏覽器不支援webserial')
    }
  }

  return (
    <>
      <div style={{ margin: '15px' }}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://p5js.org/" target="_blank">
          <img
            src={p5jsLogo}
            className="logo"
            alt="p5.js logo"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API"
          target="_blank"
        >
          <img src={serialLogo} className="logo" alt="webserial" />
        </a>
      </div>
      <div style={{ width: 300, display: 'flex', flexDirection: 'column', margin: '5px' }}>
        <button onClick={serialController}>
          Open Serial Port
        </button>
        <select onChange={e => changeBuadRate(Number(e.target.value))}>
          {commonBuadRate.map((buadrate, index) => {
            return <option key={index}>{buadrate}</option>
          })}
        </select>
      </div>
      <div style={{ margin: '5px' }}>
        <Trigger keyword={serialData.text} />
      </div>
    </>
  )
}

export default App
