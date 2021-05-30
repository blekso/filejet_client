export default function Auth({ file }) {
  return (
    <div className="flex flex-col justify-center items-center hover:bg-gray-100 p-4">
      <img src="/file.svg" alt={file.name} className="w-20 h-20" />
      <p>{file.name}</p>
    </div>
  );
}
