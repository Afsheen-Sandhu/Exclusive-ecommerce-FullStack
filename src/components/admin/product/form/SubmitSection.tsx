export default function SubmitSection() {
  return (
    <div className="pt-8 border-t">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          type="submit"
          className="w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 bg-primary text-base-100 font-semibold flex justify-center gap-2"
        >
           Create Product
        </button>
        <button
          type="button"
          className="w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 bg-gray-800 text-base-100  font-semibold"
        >
          Save as Draft
        </button>
      </div>
    </div>
  );
}
