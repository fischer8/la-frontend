import { FloatButtons, Footer, Header } from '../MainComponents/';
import { useState } from 'react';
import header_img from '../../images/photos/pousada/intern_10.jpg'
import { requestCreateAccount, setToken, requestData } from '../../services/api';

export default function Login() {
  const [formInfo, setForm] = useState({ name: '', email: '', password: '', phone: 0 });
  const { name, email, password, phone} = formInfo;

  const createAccount = async (event) => {
    event.preventDefault();
    // console.log('target.value',value);
    // console.log('setform', formInfo);
    try {
      const { token } = await requestCreateAccount('/create-account', formInfo);
      setToken(token);

      localStorage.setItem('la-vita-token', token);

      // setIsLogged(true);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleOnChange = ({ target: { value, id } }) => {
    console.log(value);
    const info = formInfo;
    info[id] = value;
    setForm({ ...info });
  };

  return(
    <section className='login'>
      <FloatButtons />
        <Header cover={header_img} />
        <form onSubmit={createAccount} style={{ color: 'black' }} method="POST">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" style={{ color: 'black' }} value={name} onChange={handleOnChange} required/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" style={{ color: 'black' }} value={email} onChange={handleOnChange} required/>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" style={{ color: 'black' }} value={password} onChange={handleOnChange} required/>
          <label htmlFor="phone">Celular:</label>
          <input type="number" id="phone" name="phone" style={{ color: 'black' }} value={phone} onChange={handleOnChange} required/>
          <button type="submit">Enviar</button>
        </form>
      <Footer />
    </section>
  );
}

