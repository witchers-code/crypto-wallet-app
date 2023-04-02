import { Component } from "solid-js";

interface ErrorMessageProps {
  errors: string[];
}

export const ErrorMessage: Component<ErrorMessageProps> = (props) => {
  return (
    <>
      {props.errors.length > 0
        ? props.errors.map((error, index) => (
            <p class="text-xs text-pink-600">
              {index + 1}. {error}
            </p>
          ))
        : null}
    </>
  );
};
