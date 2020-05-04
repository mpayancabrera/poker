import React, { FormEvent } from 'react';
import { Form, Col, Row, Card } from 'antd';
import { RouteComponentProps } from 'react-router';
import { FormComponentProps } from 'antd/lib/form';
import { LoginButton, LabelChildren, LoginInput, LoginInputPassword, showNotification, Logo } from 'pccadmin-storybook';
import styled from 'pccadmin-storybook/dist/styled-components';
import { fetchData, HttpMethod, IUser } from 'pccadmin-common';

interface ILoginFormValues {
  username: string;
  password: string;
}

interface ILoginProps extends FormComponentProps {
  route: RouteComponentProps;
  login: (user: IUser) => void;
}

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const InnerUserLogin: React.FC<ILoginProps> = (props: ILoginProps) => {
  const login = async (username: string, password: string) => {
    const res = await fetchData('/api/auth/login', HttpMethod.POST, { username, password });

    if (res.ok) {
      const user = res.data;
      props.login(user);
    } else {
      showNotification('Error', 'Login incorrecto', 'error');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: ILoginFormValues) => {
      if (!err) {
        login(values.username, values.password);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Row type='flex' justify='center' align='middle' style={{ minHeight: '100vh' }}>
      <Col style={{ width: '90%', maxWidth: '400px' }}>
        <StyledCard>
          <Row type='flex' justify='center' style={{ margin: '20px 0' }}>
            <Logo />
          </Row>
          <Form onSubmit={handleSubmit} className='login-form'>
            <Form.Item>
              <LabelChildren label='Email'>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Email no válido',
                    },
                  ],
                })(<LoginInput data-test-id='login.username' placeholder='Introducir email' />)}
              </LabelChildren>
            </Form.Item>
            <Form.Item>
              <LabelChildren label='Contraseña'>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Contraseña incorrecta',
                    },
                  ],
                })(<LoginInputPassword data-test-id='login.password' type='password' placeholder='Introducir contraseña' />)}
              </LabelChildren>
            </Form.Item>
            <Form.Item>
              <LoginButton data-test-id='login.submit' type='primary' htmlType='submit' block>
                Iniciar sesión
              </LoginButton>
            </Form.Item>
          </Form>
        </StyledCard>
      </Col>
    </Row>
  );
};

export const UserLogin = Form.create<ILoginProps>({ name: 'user-login' })(InnerUserLogin);
