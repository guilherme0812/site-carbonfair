"use client";

import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";

interface ISelect {
  name: string;
  // eslint-disable-next-line
  options: any[];
  optionValue: string;
  value?: string | number;
  label: string;
  placeholder?: string;
  onChange?(param: React.ChangeEvent<HTMLInputElement>): void;
}

const Container = styled.div`
  font-size: 0.9rem;

  .field {
    cursor: pointer;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.palette.grey[300]};
    padding: 0 20px;
    color-scheme: light;
    align-items: center;
  }
  .dropDown {
    position: relative;
    max-height: 200px;
    border-radius: 10px;
  }
  .listDropDown {
    position: absolute;
    top: 5px;
    left: 0;
    background-color: #fff;
    z-index: 1000;
    overflow-y: auto;
    border: 2px solid transparent;
    width: 100%;
    transition: 0.3s;
    max-height: 0px;
  }
  .listDropDown.active {
    border: 2px solid #e0e0e0;
    max-height: 200px;
  }

  label {
    display: flex;
    transition: 300ms;
    height: 35px;
    padding-right: 5px;
    align-items: center;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  label:hover {
    background-color: #afafaf;
  }

  label {
    input.radio {
      opacity: 0;
    }
  }

  .override.active {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background-color: #000; */
  }
`;

const NewSelect = ({
  name,
  options,
  label,
  optionValue,
  value,
  onChange,
  placeholder = "Selecione",
}: ISelect) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState(placeholder);

  const toggle = () => {
    setExpanded(expanded ? false : true);
  };

  const handleClickOption = (option: any) => {
    toggle();
    setSelectedLabel(option[label]);
  };

  useEffect(() => {
    if (value) {
      const record = options.find(
        (opt) => String(opt[optionValue]) === String(value)
      );

      if (record) {
        setSelectedLabel(record[label]);
      }
    }
  }, [value, options, optionValue, label]);

  return (
    <Container>
      <div
        className="field"
        role="button"
        aria-expanded={expanded}
        onClick={toggle}
      >
        {selectedLabel}
      </div>

      <div className="dropDown">
        <div className={`listDropDown ${expanded && "active"}`}>
          {options.map((item, index) => (
            <label key={index}>
              <input
                type="radio"
                name={name}
                className="radio"
                value={item[optionValue]}
                onChange={(e) => {
                  onChange && onChange(e);
                  handleClickOption(item);
                }}
              />
              {item[label]}
            </label>
          ))}
        </div>
      </div>

      <div
        className={`override ${expanded && "active"}`}
        onClick={toggle}
      ></div>
    </Container>
  );
};
export default NewSelect;
