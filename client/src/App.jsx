import {Navbar,Loader,Footer,Welcome,Services,Transaction} from './components';

const App = () =>
{
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Loader/>
      <Footer/>
    </div>
  )
}

export default App
