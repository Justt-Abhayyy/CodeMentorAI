function Input({

  className = "",

  ...props

}) {

  return (

    <input

      {...props}

      className={`
        w-full
        bg-zinc-900
        border
        border-zinc-700
        rounded-2xl
        px-5
        py-3
        text-white
        outline-none
        focus:border-blue-500
        ${className}
      `}

    />

  );

}

export default Input;