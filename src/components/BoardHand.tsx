import React, { useContext, useState, useEffect } from 'react';
import { Row, Typography, Button, Input, Result, Radio, Col, Select, Alert } from 'antd';
import styled from 'styled-components';
import { Context } from '../config/Context';
import { Message, Hands, OpponentActions, Action, PlayerGaps, Position } from '../utils/Hands';
import { wrongCard } from '../utils/ValidCards';

const { Title, Text } = Typography;
const { Option } = Select;

const StyledCard = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const StyledInput = styled(Input)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;

const StyledCol = styled(Col)`
  margin-top: 30px;
`;

interface BoardHandState {
  message: string;
  naipe: string;
  card1: string;
  card2: string;
  opponentAction: string;
  position: string;
  needClean: boolean;
}

export const BoardHand = () => {
  const { players, openConfig, setOpenConfig, gaps, setGaps } = useContext(Context);

  const [state, setState] = useState<BoardHandState>({
    message: '',
    naipe: 'o',
    card1: '',
    card2: '',
    opponentAction: '',
    position: '',
    needClean: false,
  });

  useEffect(() => {
    if (typeof players !== undefined && players >= 0 && typeof gaps !== undefined && gaps >= 0) {
      setState({ ...state, position: getPosition() });
    }
  }, [gaps, players]);

  const onSubmit = () => {
    const hand = `${state.card1.toUpperCase() + state.card2.toUpperCase() + state.naipe.toUpperCase()}`;
    const handWeight = Object.entries(Hands).find(([key, value]) => value.some(val => val === hand));
    const pos = calculatePosition();
    let message = '';
    if (handWeight && pos) {
      if (handWeight[0] === 'VERY_STRONG_HAND') {
        message = Action[handWeight[0]][pos];
      } else {
        if (handWeight[0] === 'MEDIUM_HAND' && state.opponentAction === 'MORE_THAN_ONE_RISE_BEFORE_YOU' && hand === 'KQS' && pos !== 'BIG_BLIND') {
          message = Message.CALL;
        } else {
          message = Action[handWeight[0]][pos][state.opponentAction];
        }
      }
    } else {
      message = Message.FOLD;
    }

    setState({ ...state, message: message, needClean: true });
  };

  const calculatePosition = () => {
    return PlayerGaps[players][gaps];
  };

  const getPosition = () => {
    const position = Object.entries(Position).find(([key, value]) => key === calculatePosition());
    if (position) {
      return position[1];
    }
    return '';
  };

  return (
    <Row>
      <Col md={{ span: 24 }}>
        <StyledCard>
          <Row>
            <StyledCol md={{ span: 20, offset: 1 }}>
              <Button type='primary' onClick={() => setOpenConfig(!openConfig)}>
                Configurar mesa de juego
              </Button>
            </StyledCol>
          </Row>

          {players < 0 && gaps < 0 ? (
            <Row>
              <StyledCol md={{ span: 20, offset: 1 }}>
                <Alert
                  message='Warning'
                  closable
                  description='Establece la configuración inicial antes de empezar a jugar.'
                  type='warning'
                  showIcon
                />
              </StyledCol>
            </Row>
          ) : (
            <Row>
              <StyledCol md={{ span: 20, offset: 1 }}>
                <div>
                  <Text strong>{`El número de jugadores establecido es ${players}`}</Text>
                  <br />
                  <Text strong>{`El número de huecos desde la ciega grande hasta tu posición es ${gaps}`}</Text>
                  <br />
                  {state.position !== '' && <Text strong>{`En esta jugada te encuentras en posición ${state.position}`}</Text>}
                </div>
              </StyledCol>
            </Row>
          )}

          <Row type='flex' justify='center' style={{ margin: '20px 20px' }}>
            <Col md={{ span: 20 }}>
              <Row type='flex' justify='center'>
                <Col>
                  <Title level={4}>Cartas de Mano</Title>
                </Col>
              </Row>

              <Row type='flex' justify='center'>
                <Col md={{ span: 24 }}>
                  <StyledInput
                    disabled={openConfig}
                    placeholder='Carta 1'
                    value={state.card1}
                    onChange={(e: any) => setState({ ...state, card1: e.target.value })}
                  />
                </Col>
              </Row>

              <Row type='flex' justify='center'>
                <Col md={{ span: 24 }}>
                  <StyledInput
                    disabled={openConfig}
                    placeholder='Carta 2'
                    value={state.card2}
                    onChange={(e: any) => setState({ ...state, card2: e.target.value })}
                  />
                </Col>
              </Row>

              <Row type='flex' justify='center'>
                <Col md={{ span: 24 }}>
                  <Select
                    showArrow
                    placeholder='Seleciona una acción'
                    value={state.opponentAction || undefined}
                    onChange={(value: string) => setState({ ...state, opponentAction: value })}
                    style={{ margin: '10px', width: '100%' }}
                  >
                    {OpponentActions &&
                      Object.entries(OpponentActions).map(([key, value]) => (
                        <Option key={key} value={key}>
                          {value}
                        </Option>
                      ))}
                  </Select>
                </Col>
              </Row>

              <Row type='flex' justify='center'>
                <Col>
                  <Radio.Group
                    disabled={openConfig || state.card1.toUpperCase() === state.card2.toUpperCase()}
                    onChange={(e: any) => setState({ ...state, naipe: e.target.value })}
                    buttonStyle='solid'
                    value={state.card1.toUpperCase() === state.card2.toUpperCase() ? 'o' : state.naipe}
                  >
                    <Radio.Button value='s'>Mismo palo</Radio.Button>
                    <Radio.Button value='o'>Diferente palo</Radio.Button>
                  </Radio.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type='flex' justify='center' style={{ margin: '20px 0' }}>
            <StyledButton type='primary' disabled={!wrongCard(state.card1) || !wrongCard(state.card2) || state.needClean} onClick={() => onSubmit()}>
              Enviar
            </StyledButton>
            <StyledButton
              disabled={state.card1 === '' && state.card2 === ''}
              onClick={() => {
                setGaps(gaps - 1 >= 0 ? gaps - 1 : players - 1);
                setState({ ...state, card1: '', card2: '', naipe: 'o', message: '', opponentAction: '', needClean: false });
              }}
            >
              Limpiar
            </StyledButton>
          </Row>
          <Row type='flex' justify='center' style={{ margin: '20px 0' }}>
            {state.message && (
              <Result
                status={
                  state.message === Message.FOLD
                    ? 'error'
                    : state.message === Message.CHECK
                    ? 'info'
                    : state.message === Message.CALL
                    ? 'warning'
                    : 'success'
                }
                title={state.message}
                subTitle={`Tu posición es: ${state.position}`}
              />
            )}
          </Row>
        </StyledCard>
      </Col>
    </Row>
  );
};
