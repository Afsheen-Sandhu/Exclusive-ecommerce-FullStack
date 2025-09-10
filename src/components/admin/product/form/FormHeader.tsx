export default function FormHeader() {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="p-3 bg-primary rounded-xl shadow-lg">
        <svg className="w-8 h-8 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">Add New Product</h1>
        <p className="text-lg">
          Create a comprehensive product listing with all the essential details
        </p>
      </div>
    </div>
  );
}
