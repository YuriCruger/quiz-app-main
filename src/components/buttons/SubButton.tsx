interface SubButtonProps {
    handleSubmit: () => void
    submitClicked: boolean
}

export default function SubmitButton({ handleSubmit, submitClicked }: SubButtonProps) {
  return (
    <button
          onClick={handleSubmit}
          className={`min-h-[80px] py-2 px-4 shadow-md rounded-md font-bold text-white text-2xl bg-purple hover:bg-purple-hover transition duration-300 easy-in-out ${
            submitClicked && 'hidden'
            }`}
        >
          Submit
        </button>
  )
}
