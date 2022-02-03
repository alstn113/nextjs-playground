import styled from '@emotion/styled';

export default function Custom404() {
  return <Text>404 - Page Not Found</Text>;
}

const Text = styled('div')`
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  padding: 0 30px;
  font-size: 45px;
  font-weight: 600;
`;
