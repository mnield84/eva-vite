import { useState } from "react";
import { useMutation } from "react-query";
import { Wrapper, FormBox, Heading, FormInput, FormButton } from "./App.styles";
import EvaLogo from "./assets/eva-logo.png";
function App() {
  const [userID, setUserID] = useState<string>("");

  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  async function createUser(user: User) {
    const response = await fetch(
      "https://mockend.com/api/pgilgunn/coding-test/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (!response.ok) {
      throw new Error("Error creating user");
    }

    return response.json();
  }

  const mutation = useMutation(createUser, {
    onSuccess: (data) => {
      console.log("User created successfully:", data);
      setUserID(data.id);
      resetForm();
    },
    onError: (error) => {
      console.error("Error creating user:", error);
      // Handle the error
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    });
  };

  return (
    <>
      <Wrapper>
        <FormBox>
          <img src={EvaLogo} alt="" />
          <Heading>Create User</Heading>
          <form onSubmit={handleSubmit} id="createUser">
            <FormInput htmlFor="firstName">
              <span>First name (required)</span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </FormInput>
            <FormInput htmlFor="lastName">
              <span>Last name (required)</span>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </FormInput>
            <FormInput htmlFor="age">
              <span>Age (required)</span>
              <input
                type="number"
                id="age"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </FormInput>
            <FormInput htmlFor="email">
              <span>Email (required)</span>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
            </FormInput>
          </form>
          <FormButton
            type="submit"
            form="createUser"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Creating..." : "Create user"}
          </FormButton>
          {userID && <Heading as="h4">New user ID: {userID}</Heading>}
          {mutation.isError && <Heading as="h4">Error creating user</Heading>}
        </FormBox>
      </Wrapper>
    </>
  );
}

export default App;

interface User {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
}
