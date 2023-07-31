"use client";

import Image from 'next/image'
import { CustomButtonProps } from '../types/index';

const CustomButton = ({btnType, containerStyles, handleClick, title}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>

    </button>
  )
}

export default CustomButton
