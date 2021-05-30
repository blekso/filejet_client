export default function Auth({ file }) {
  return (
    <div className="grid gap-4 hover:bg-gray-100 p-4">
      <div>
        <img src="/file.svg" alt={file.name} />
      </div>
      <div>
        <p>{file.name}</p>
      </div>
    </div>
  );
}
