import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';
import { IForm } from '@/shared/interfaces';

interface Props {
  isAuthenticated: boolean;
  register: UseFormRegister<IForm>;
  handleSubmit: UseFormHandleSubmit<IForm>;
  submit: SubmitHandler<IForm>;
  out: () => void;
}

function LoginCard({ isAuthenticated, register, handleSubmit, submit, out }: Props) {
  return (
    <>
      {!isAuthenticated ? (
        <>
          <h1>Введите данные для входа:</h1>
          <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <input
              type="text"
              placeholder="username"
              {...register('name', { required: true })}
              className={styles.input}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="password"
              {...register('password', { required: true })}
            />
            <button className={styles.button}>Войти</button>
          </form>
        </>
      ) : (
        <>
          <h1>Вы уже авторизированы</h1>
          <button onClick={out}>Выйти</button>
        </>
      )}
    </>
  );
}
export default LoginCard;
