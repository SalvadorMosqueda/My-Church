import React from "react";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@heroui/react";

export default function LoginPage() {
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  // Real-time password validation
  const getPasswordError = (value) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors = {};

    // Password validation
    const passwordError = getPasswordError(data.password);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);

    //   return;
    // }

    // if (data.terms !== "true") {
    //   setErrors({ terms: "Please accept the terms" });

    //   return;
    // }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/corona.jpg')" }}
    >
      <div className="flex items-center justify-center h-screen ">
        <div className="w-[35rem]  bg-white  h-[40rem]  shadow-xl rounded-3xl ">
          <img src="/images/iafcj.png" alt="Fondo" />
          {/* <h1 className=" text-4xl font-bold text-yellow-700 py-2 flex text-center justify-center">Sistema Celular Iafcj #25</h1> */}
          <Form
            className="w-full py-5  flex justify-center items-center space-y-4"
            validationErrors={errors}
            onReset={() => setSubmitted(null)}
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-4 max-w-md">
              <Input
                isRequired
                errorMessage={({ validationDetails }) => {
                  if (validationDetails.valueMissing) {
                    return "Please enter your name";
                  }

                  return errors.name;
                }}
                label="Nombre de usuario"
                labelPlacement="outside"
                name="Usuario"
                placeholder="Escribe tu usuario"
              />

              <Input
                isRequired
                // errorMessage={getPasswordError(password)}
                // isInvalid={getPasswordError(password) !== null}
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onValueChange={setPassword}
              />

              <Select
                isRequired
                label="Celula"
                labelPlacement="outside"
                name="Celula"
                placeholder="Select Celula"
              >
                {
                  <>
                    <SelectItem key="ar">1</SelectItem>
                  </>
                }
              </Select>

              {/* <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.terms}
            name="terms"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({ ...prev, terms: undefined }))
            }
          >
            I agree to the terms and conditions
          </Checkbox> */}

              <p className=" text-sm cursor-pointer hover:text-blue-800">
                Olvidate tu password?
              </p>

              {errors.terms && (
                <span className="text-danger text-small">{errors.terms}</span>
              )}

              <div className="flex gap-4">
                <Button className="w-full" color="primary" type="submit">
                  Iniciar Sesion
                </Button>
                <Button type="reset" variant="bordered">
                  Resetear
                </Button>
              </div>
            </div>

            {submitted && (
              <div className="text-small text-default-500 mt-4"></div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}
