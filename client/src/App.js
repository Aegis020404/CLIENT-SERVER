import LongPulling from "./requests/longPulling";
import EventSourcing from "./requests/EventSourcing";
import WebSock from "./requests/WebSock";

function App() {
  return (
    <div className="App">
        <WebSock/>
        {/*<EventSourcing/>*/}
      {/*<LongPulling/>*/}
    </div>
  );
}

export default App;
