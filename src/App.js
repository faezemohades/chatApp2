import './App.css';
import ChatBoxReciever, { ChatBoxSender } from './components/ChatContainer';
import InputText from './components/InputText';

function App() {
  return (
    <div style={{backgroundColor:"#ece5dd", height:'100vh'}}>
    <h1>Sweet Chat</h1>
    <div >
    <ChatBoxReciever user='faeze' avatar="https://picsum.photos/id/237/200/300" message="hello"/>
    <ChatBoxSender user='saeid'avatar="https://picsum.photos/200/300?grayscale" message="hi"/>
    <InputText addMessage={(message)=>console.log(message.message)}/>
    </div>
    </div>
  );
}

export default App;
