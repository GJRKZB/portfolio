import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { MutationTuple, useMutation, gql, ApolloError } from "@apollo/client";
import styles from "./Form.module.css";
import PaperPlane from "/png/paper-plane.png";
import XMark from "/png/x-mark.png";
import { translations } from "../translations/en-GB/en-GB";

const SEND_EMAIL = gql`
  mutation Mutation($email: String) {
    createUser(email: $email) {
      email
    }
  }
`;

type FormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormState = {
  email: string;
  confirm: boolean;
};

type CreateUserMutationData = {
  createUser: {
    email: string;
  };
};

type CreateUserMutationVars = {
  email: string;
};

const Form: React.FC<FormProps> = ({ setIsOpen }) => {
  const [email, setEmail] = useState<FormState["email"]>("");
  const [confirm, setConfirm] = useState<FormState["confirm"]>(false);
  const [createUser, { loading, error }] = useMutation<
    CreateUserMutationData,
    CreateUserMutationVars
  >(SEND_EMAIL, {
    onError: (err: ApolloError) => {},
    onCompleted: (data: CreateUserMutationData) => {
      setConfirm(true);
      setEmail("");
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      error.message = "";
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({ variables: { email } });
  };

  return (
    <>
      <div
        className={styles.dark__background}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div className={styles.form__container}>
        <i
          className={styles.icon}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img src={XMark} alt="X Mark" />
        </i>
        {!confirm ? (
          <div className={styles.form__content}>
            <h3>{translations.form.getInTouch}</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.form__input}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <div className={styles.button__container}>
                  <button type="submit">
                    {translations.form.btn}
                    <img src={PaperPlane} alt="Paper Plane" />
                  </button>
                </div>
              </div>
              {loading && (
                <p className={styles.loading__indicator}>
                  {translations.form.loading}
                </p>
              )}
              {error && (
                <p className={styles.error__message}>{error.message}</p>
              )}
            </form>
          </div>
        ) : (
          <div className={styles.confirm__message}>
            <h3>{translations.form.confirmation}</h3>
            <p>{translations.form.message}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
