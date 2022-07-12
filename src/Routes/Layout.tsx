import styled from "@emotion/styled";
import { Button, Stack, Tabs, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Loader } from "../Components/Loader";
import { TabLink } from "../Components/TabLink";
import { setUah, TInitialState } from "../redux/slices/currencySlice";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  children: JSX.Element;
};

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Layout = ({ children }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const dispatch: Dispatch<any> = useDispatch();

  const { isLoading, error } = useSelector((state: TInitialState) => state);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setUah(inputValue));
  };

  return (
    <StyledLayout>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error>Error :(</Error>
      ) : (
        <>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            centered
            sx={{ mb: "15px" }}
          >
            <TabLink label="UAH/USD" href="/" />
            <TabLink label="UAH/EUR" href="/uah-eur" />
            <TabLink label="UAH/PLN" href="/uah-pln" />
          </Tabs>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction="row"
            spacing={2}
            sx={{ mb: "15px" }}
          >
            <TextField
              id="outlined-number"
              label="UAH"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type="submit" variant="contained">
              Calculate
            </Button>
          </Stack>

          {children}
        </>
      )}
    </StyledLayout>
  );
};
