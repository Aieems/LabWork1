import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { ThemeContext } from '../Context/ThemeContext';

function Login() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
    navigate('/cart');
  };
  return (
    <div className="flex justify-center mt-20">
      <div className={`flex flex-col rounded-lg p-8 shadow-lg bg-[#dcc1ff]`}
        style={{
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',}}>
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-white'} mb-4 font-bold text-xl`}>
          Войдите в аккаунт, чтобы продолжить
        </h2>
        <button onClick={handleLogin} className={`${theme === 'dark' ? 'bg-[#9747FF] hover:bg-[#5e28a4]' : 'bg-[#f492ff] hover:bg-[#b046bc]'} text-white font-medium py-2 px-4 rounded transition-colors duration-200`}>
          Войти
        </button>
      </div>
    </div>
  );
}
export default Login;