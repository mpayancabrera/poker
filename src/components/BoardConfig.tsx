import React, { useContext, useState, useEffect } from 'react';
import { Row, Typography, Button, InputNumber, Col, Alert } from 'antd';
import styled from 'styled-components';
import { Context } from '../config/Context';

const { Title, Text } = Typography;

const StyledCard = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const StyledInput = styled(InputNumber)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 30px;
  display: block;
`;

const StyledCol = styled(Col)`
  margin-top: 30px;
`;

export const BoardConfig = () => {
  const { setOpenConfig, players, setPlayers, gaps, setGaps } = useContext(Context);

  const [numberPlayers, setNumberPlayers] = useState(2);
  const [numberGaps, setNumberGaps] = useState(0);
  const [error, setError] = useState(false);

  const saveConfig = () => {
    setPlayers(numberPlayers);
    setGaps(numberGaps);
    setOpenConfig(false);
  };

  const validatePlayers = (players: number) => {
    players > 9 || players < 2 ? setError(true) : setError(false);
  };

  const validateGaps = (gaps: number) => {
    gaps >= numberPlayers || gaps < 0 ? setError(true) : setError(false);
  };

  useEffect(() => {
    if (players >= 0 && gaps >= 0) {
      setNumberPlayers(players);
      setNumberGaps(gaps);
    }
  }, [players, gaps]);

  return (
    <StyledCard>
      <Row>
        <StyledCol md={{ span: 20, offset: 1 }}>
          <Title level={4}>Configuración</Title>
        </StyledCol>
      </Row>
      <Row>
        <StyledCol md={{ span: 20, offset: 1 }}>
          <Text strong>Introduzca el número de jugadores que participan en la partida</Text>
          <StyledInput
            defaultValue={players >= 0 ? players : numberPlayers}
            value={numberPlayers}
            onChange={(e: any) => {
              validatePlayers(e);
              setNumberPlayers(e);
            }}
          />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol md={{ span: 20, offset: 1 }}>
          <Text strong>Introduzca el número de saltos entre la ciega grande y su posición</Text>
          <StyledInput
            defaultValue={gaps ? gaps : numberGaps}
            value={numberGaps}
            onChange={(e: any) => {
              validateGaps(e);
              setNumberGaps(e);
            }}
          />
        </StyledCol>
      </Row>
      {error && (
        <Row>
          <StyledCol md={{ span: 20, offset: 1 }}>
            <Alert message='Error' closable description='Los datos introducidos no son correctos.' type='error' showIcon />
          </StyledCol>
        </Row>
      )}
      <Row>
        <StyledCol md={{ span: 20, offset: 1 }}>
          <StyledButton type='primary' disabled={error} onClick={() => saveConfig()}>
            Guardar
          </StyledButton>
        </StyledCol>
      </Row>
    </StyledCard>
  );
};
