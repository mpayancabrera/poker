import React, { useState } from 'react';
import { Col, Row, Card, Input, Button, Result, Radio, Typography } from 'antd';

import styled from 'styled-components';
import { Message } from '../utils/Hands';

const { Title } = Typography;

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled(Input)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  display: block;
  background-color: #585adb;
  color: #fff;
`;

export const PreFlopCards: React.FC = () => {
  const [state, setState] = useState({
    message: '',
    group: '',
    naipe: 0,
    card1: '',
    card2: '',
    players: 0,
    position: 0,
    gaps: 0,
  });

  const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

  const wrongCard = (card: string) => {
    return cards.some((element: string) => element === card.toUpperCase());
  };

  const onSubmit = () => {
    setState({ ...state, message: 'Abandonamos' });
  };

  return (
    <Row type='flex' justify='center' align='middle'>
      <Col style={{ width: '90%', maxWidth: '800px' }}>
        <StyledCard>
          <Row type='flex' justify='center' style={{ margin: '50px' }}>
            <Title level={2}>Introduzca el número de jugadores en la partida</Title>
            <StyledInput placeholder='Número de jugadores' onChange={(e: any) => setState({ ...state, players: e.target.value })} />
            {`El número de jugadores establecido es ${state.players}`}
          </Row>

          <Row type='flex' justify='center' style={{ margin: '50px' }}>
            <Title level={4}>Introduzca el número de jugadores entre su posición y la ciega grande</Title>
            <StyledInput placeholder='Número de jugadores' onChange={(e: any) => setState({ ...state, gaps: e.target.value })} />
            <StyledButton type='primary' onClick={() => setState({ ...state, gaps: state.gaps + 1 })}>
              +
            </StyledButton>
            <StyledButton type='primary' onClick={() => setState({ ...state, gaps: state.gaps - 1 })}>
              -
            </StyledButton>
            {`Tu posición contando desde la ciega grande es ${state.gaps}`}
          </Row>

          <Row type='flex' justify='center' style={{ margin: '20px 0' }}>
            <Title level={4}>Cartas de Mano</Title>
            <StyledInput placeholder='Carta 1' onChange={(e: any) => setState({ ...state, card1: e.target.value })} />
            <StyledInput placeholder='Carta 2' onChange={(e: any) => setState({ ...state, card2: e.target.value })} />
            <Radio.Group
              onChange={(e: any) => setState({ ...state, naipe: e.target.value })}
              defaultValue={0}
              buttonStyle='solid'
              value={state.naipe}
            >
              <Radio.Button value='a'>Mismo palo</Radio.Button>
              <Radio.Button value='b'>Diferente palo</Radio.Button>
            </Radio.Group>
          </Row>
          <Row type='flex' justify='center' style={{ margin: '20px 0' }}>
            <StyledButton disabled={!wrongCard(state.card1) || !wrongCard(state.card2)} onClick={() => onSubmit()}>
              Enviar
            </StyledButton>
          </Row>
          <Row type='flex' justify='center' style={{ margin: '20px 0' }}>
            {state.message && (
              <Result
                status={
                  state.message === Message.FOLD ? 'error' : state.message === Message.CHECK || state.message === Message.CALL ? 'warning' : 'success'
                }
                title={state.message}
                subTitle={state.group}
              />
            )}
          </Row>
        </StyledCard>
      </Col>
    </Row>
  );
};
