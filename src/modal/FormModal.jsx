import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import styles from "./Form.module.css";
import PaperPlane from "/png/paper-plane.png";

const SEND_EMAIL = gql`
  mutation Mutation($email: String) {
    createUser(email: $email) {
      email
    }
  }
`;

export default function Form({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [createUser, { loading, error }] = useMutation(SEND_EMAIL, {
    onError: (err) => {},
    onCompleted: () => {
      setConfirm(true);
      setEmail("");
    },
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      error.message = "";
    }
  };

  const handleSubmit = (e) => {
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
        {!confirm ? (
          <div className={styles.form__content}>
            <h3>Get in touch</h3>
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
                    Send
                    <img src={PaperPlane} alt="Paper Plane" />
                  </button>
                </div>
              </div>
              {loading && (
                <p className={styles.loading__indicator}>Loading...</p>
              )}
              {error && (
                <p className={styles.error__message}>{error.message}</p>
              )}
            </form>
          </div>
        ) : (
          <div className={styles.confirm__message}>
            <h3>Thank you!</h3>
            <p>
              Your email has been forwarded successfully I will reach out to you
              shortly
            </p>
          </div>
        )}
      </div>
    </>
  );
}
