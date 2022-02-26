import { useMutation } from 'react-query';
import { logout, signin } from '@/api/auth';

//emotion
import styled from '@emotion/styled';
import { SigninRequest } from '@/shared/types';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//recoil
import { useRecoilState } from 'recoil';
import { userState } from '@/store/user';

interface IForminputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('필수항목'),
  password: yup.string().required('필수 항목'),
});

export default function LoginPage() {
  const [userValue, setUserValue] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const mutation = useMutation(
    'signin',
    (data: SigninRequest) => signin(data),
    {
      onSuccess: data => {
        setUserValue({ access_token: data.access_token, isLoggedIn: true });
        return;
      },
    },
  );
  const onSubmit = (data: IForminputs) => {
    mutation.mutate(data);
  };
  return (
    <Wrapper>
      <div>{userValue.access_token}</div>
      <br />
      <div>{userValue.isLoggedIn ? '로그인 상태' : '로그아웃 상태'}</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>EAMIL</div>
        <Input {...register('email')} />
        <p>{errors.email?.message}</p>
        <div>PASSWORD</div>
        <Input {...register('password')} />
        <p>{errors.password?.message}</p>
        <Button type="submit">
          {mutation.isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
      <br />
      <Button onClick={() => logout()}>로그아웃</Button>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled('input')`
  border: 1px solid black;
`;

const Button = styled('button')`
  border: 1px solid black;
`;
