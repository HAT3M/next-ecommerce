import styled from 'styled-components';
import { colors } from '../config/theme';

const Form = () => {
  return (
    <Wrapper>
      <FormGroup>
        <Label htmlFor="card_holder">Kart Sahibi</Label>
        <Input id="card_holder" name="card_holder" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="card_number">Kart No</Label>
        <Input id="card_number" name="card_number" type="text" />
      </FormGroup>
      <FormAltGroup>
        <FormGroup className="js-date-wrapper">
          <Label>Son Kullanım Tarihi</Label>
          <FormAltGroup>
            <Select id="card_month" name="card_month">
              <option value="0" hidden>
                Ay
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
            <Select id="card_year" name="card_year">
              <option value="0" hidden>
                Yıl
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </Select>
          </FormAltGroup>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ccv">CCV</Label>
          <Input id="ccv" name="ccv" type="text" />
        </FormGroup>
      </FormAltGroup>
      <Error className="js-form-error"></Error>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  width: 100%;
  background: ${colors.white};
  box-shadow: 0 3px 6px rgb(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const FormAltGroup = styled.div`
  display: flex;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.oxford};
  padding: 10px;
  border-radius: 5px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors.oxford};
  padding: 10px;
  margin-right: 10px;
`;
