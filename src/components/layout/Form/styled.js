import styled from 'styled-components/macro';

import { visuallyHidden } from 'styles/Mixins';

const FormWrapper = styled.section`
  
`;
const Form = styled.form`
  
`;
const FormSection = styled.section`
  ${({ alignment }) => alignment && `
    display: flex;
    justify-content: ${alignment};
  `}
  ${({ hasDivisor }) => hasDivisor && `
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-bottom: 1.5rem
    padding-bottom: 1rem
  `}
`;
const FormSectionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const FormSectionFields = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > :nth-child(odd) {
    padding-right: .5rem;
  }
  > :nth-child(even) {
    padding-left: .5rem;
  }
`;

const FormFieldset = styled.fieldset`
  border: 0;
  margin: 0 0 1rem 0;
  padding: 0;
  width: 50%;
`;

const FormFieldsetLabel = styled.label`
  display: inline-block;
  margin-bottom: .5rem;

  & > span {
    ${visuallyHidden}
  }
`;

const FormFieldsetInput = styled.input`
  background-color: ${({ theme }) => theme.main.colors.white };
  border: 1px solid #ced4da;
  border-radius: .25rem;
  color: #495057;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: .375rem .75rem;
  width: 100%;
`;

const FormFieldsetHelp = styled.small`
  color: #6c757d;
  font-size: 80%;
  font-weight: 400;
`;

const ButtonSubmit = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.main.colors.blue };
  border-color: transparent;
  border-radius: 100rem;
  border-style: solid;
  border-width: 1px;
  color: ${({ theme }) => theme.main.colors.white };
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.main.fonts.weight.bold };
  line-height: 1em;
  margin-top: 1rem;
  padding: .75rem 2rem;
  text-transform: uppercase;
  transition-duration: 0.2s;
  transition-property: background-color, box-shadow;
  
  & > span {
    margin-left: .5rem;
  }
`;

export {
  Form,
  FormFieldset,
  FormFieldsetHelp,
  FormFieldsetInput,
  FormFieldsetLabel,
  FormSection,
  FormSectionFields,
  FormSectionTitle,
  FormWrapper,
  ButtonSubmit,
};