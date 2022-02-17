import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { signup } from '@/api/auth';

//emotion
import styled from '@emotion/styled';
import { SignupRequest } from '@/shared/types';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IForminputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('필수항목'),
  password: yup.string().required('필수 항목'),
});

export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const mutation = useMutation(
    'signup',
    (data: SignupRequest) => signup(data),
    {
      onSuccess: () => {
        return router.push('/');
      },
    },
  );
  const onSubmit = (data: IForminputs) => {
    mutation.mutate(data);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>EAMIL</div>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <div>PASSWORD</div>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
        <button type="submit">
          {mutation.isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled('div')``;
