import { useAuth } from '@/app/providers/AuthProvide';
import { LoginCard } from '@/features/login';

import { IForm } from '@/shared/interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const { login, logout, isAuthenticated } = useAuth();
  const user = {
    username: 'Admin',
    password: 12345,
  };

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {},
  });
  const out = () => {
    logout();
    navigate('/');
  };
  const submit: SubmitHandler<IForm> = (data) => {
    if (data.name === user.username && Number(data.password) === user.password) {
      navigate('/news');
      login();
    } else {
      console.log('Неправильное имя или пароль');
    }
  };

  return (
    <LoginCard
      isAuthenticated={isAuthenticated}
      register={register}
      handleSubmit={handleSubmit}
      out={out}
      submit={submit}
    />
  );
}
export default LoginForm;
