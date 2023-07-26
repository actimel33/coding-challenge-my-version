export default async function InfluencersTableCell({ text }: { text: string }) {
  return (
    <td className="py-3 px-2 text-left whitespace-nowrap max-w-5xl">
      <div className="flex items-left">
        <span className="font-medium">{text}</span>
      </div>
    </td>
  );
}
