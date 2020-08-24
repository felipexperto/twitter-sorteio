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
  min-height: 20px;

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
  min-height: 40px;
  padding: .375rem .75rem;
  width: 100%;
`;

const FormFieldsetSwitchWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const FormFieldsetSwitchComponent = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;

  .input--checkbox {
    height: 0;
    opacity: 0;
    width: 0;

    &:checked + .slider {
      background-color: ${({ theme }) => theme.main.colors.green };
    }
    
    &:focus + .slider {
      box-shadow: 0 0 1px ${({ theme }) => theme.main.colors.green };
    }
    
    &:checked + .slider:before {
      transform: translateX(26px);
    }
  }

  .slider {
    background-color: ${({ theme }) => theme.main.colors.red };
    border-radius: 34px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;

    &:before {
      background-color: ${({ theme }) => theme.main.colors.white };
      border-radius: 50%;
      bottom: 4px;
      content: "";
      height: 26px;
      left: 4px;
      position: absolute;
      transition: .4s;
      width: 26px;
      z-index: 2;
    }
  }

  .icon {
    display: block;
    fill: ${({ theme }) => theme.main.colors.white };
    line-height: 1em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &--active {
      left: 6px;
    }
    &--disable {
      right: 6px;
    }
  }
`;

const FormFieldsetSwitchText = styled.div`
  margin-left: 10px;
`;

const FormFieldsetInputGroup = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  > input {
    border-bottom-left-radius: 0;
    border-left-width: 0;
    border-top-left-radius: 0;
  }
`;

const FormFieldsetInputIcon = styled.div`
  align-items: center;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem 0 0 .25rem;
  color: #495057;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0;
  padding: .375rem .75rem;
  text-align: center;
  white-space: nowrap;
`;

const FormFieldsetHelp = styled.small`
  color: ${({ theme, errorMessage }) => errorMessage ? theme.main.colors.red : theme.main.colors.darkgray};
  font-size: 80%;
  font-weight: 400;
  min-height: 20px;
  padding-top: 2px;
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
  FormFieldsetInputGroup,
  FormFieldsetInputIcon,
  FormFieldsetSwitchComponent,
  FormFieldsetSwitchText,
  FormFieldsetSwitchWrapper,
  FormFieldsetLabel,
  FormSection,
  FormSectionFields,
  FormSectionTitle,
  FormWrapper,
  ButtonSubmit,
};