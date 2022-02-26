import { useGetUsers } from '@/api/auth';
import styled from '@emotion/styled';

const TestPage = () => {
  const { data, isLoading, isError, error } = useGetUsers();
  if (isError) {
    return <div>{error?.message}</div>;
  }
  return (
    <Wrapper>
      <div>TEST PAGE</div>
      <div>
        {isLoading
          ? 'loading...'
          : data?.map(user => (
              <div key={user.id}>
                <div>{user.id}</div>
                <div>{user.email}</div>
                <div>{user.password}</div>
                <div>{user.hashedRt}</div>
              </div>
            ))}
      </div>
    </Wrapper>
  );
};

export default TestPage;

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
