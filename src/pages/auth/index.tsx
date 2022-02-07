import { useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flexCenter } from '@/shared/styled';

interface AuthPageProps {
  type: 'signin' | 'signup';
}

interface FormType {
  type: 'signin' | 'signup';
}

export default function AuthPage({ type = 'signup' }: AuthPageProps) {
  const [FormType, setFormType] = useState<'signin' | 'signup'>(type);
  return (
    <Wrapper type={FormType}>
      <Container>
        <BackgroundBox>
          <TextBox>
            <h2>Already Have an Account?</h2>
            <button onClick={() => setFormType('signin')}>Sign in</button>
          </TextBox>
          <TextBox>
            <h2>Don&apos;t Have an Account?</h2>
            <button onClick={() => setFormType('signup')}>Sign up</button>
          </TextBox>
        </BackgroundBox>
        <FormWrapper type={FormType}>
          <SigninForm>
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </SigninForm>
          <SignupForm>
            <form>
              <h3>Sign Up</h3>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Register</button>
            </form>
          </SignupForm>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled('div')<FormType>`
  ${flexCenter};
  min-height: 100vh;
  transition: 0.5s;
  background-color: ${props =>
    props.type === 'signin' ? '#63e6be' : '#91a7ff'};
`;

const Container = styled('div')`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;
`;
const BackgroundBox = styled('div')`
  ${flexCenter}
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
`;

const TextBox = styled('div')`
  ${flexCenter}
  flex-direction: column;
  position: relative;
  width: 50%;
  height: 100%;
  h2 {
    ${({ theme }) => theme.font.medium}
    color: #fff;
    margin-bottom: 20px;
  }
  button {
    ${({ theme }) => theme.font.small}
    padding: 10px 20px;
    background: #fff;
    color: #333;
  }
`;

const StyledFormBox = styled('div')`
  position: absolute;
  width: 100%;
  padding: 30px;
  transition: 0.5s ease-in-out;
  form {
    ${flexCenter};
    width: 100%;
    flex-direction: column;
    padding: 30px;
    h3 {
      ${({ theme }) => theme.font.medium}
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }
    input {
      width: 100%;
      ${({ theme }) => theme.font.small}
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid #333;
    }
    button {
      width: 100%;
      ${({ theme }) => theme.font.small}
      margin-bottom: 20px;
      padding: 10px;
      background: #868e96;
      color: #fff;
    }
  }
`;

const SigninForm = styled(StyledFormBox)`
  left: 0;
`;

const SignupForm = styled(StyledFormBox)`
  left: 100%;
  visibility: hidden;
`;

const FormWrapper = styled('div')<FormType>`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;
  ${props =>
    props.type === 'signup' &&
    css`
      left: 50%;
      ${SigninForm} {
        left: -100%;
        visibility: hidden;
      }
      ${SignupForm} {
        left: 0;
        visibility: visible;
      }
    `};
`;
