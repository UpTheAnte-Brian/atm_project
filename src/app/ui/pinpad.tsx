"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Pinpad({
  length,
  onComplete,
}: {
  length: number;
  onComplete: (pin: string) => void;
}) {
  const [pin, setPin] = useState(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (pin.every((digit) => digit !== "" && digit !== undefined)) {
      onComplete(pin.join(""));
      inputRefs.current[length - 1]?.blur();
    }
  }, [pin, length, onComplete]);

  return (
    <div>
      {pin.map((digit, index) => (
        <input
          key={index}
          type="tel"
          className="form-control border justify-center w-5 px-1"
          pattern="\d*"
          autoFocus={index === 0}
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}
