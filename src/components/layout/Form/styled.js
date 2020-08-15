import styled from 'styled-components/macro';

const FormWrapper = styled.section`
  
`;
const Form = styled.form`
  
`;
const FormSection = styled.section`
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
const FormFieldset = styled.fieldset`
  border: 0;
  margin: 0 0 1rem 0;
  padding: 0;

  & > label {
    display: inline-block;
    margin-bottom: .5rem;
  }
  & > input {
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
  }
  & > small {
    color: #6c757d;
    font-size: 80%;
    font-weight: 400;
  }
`;

export {
  Form,
  FormFieldset,
  FormSection,
  FormSectionTitle,
  FormWrapper,
};