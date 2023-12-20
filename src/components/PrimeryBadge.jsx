export const PrimeryBadge = ({ badgeText }) => {
  return (
    <div>
      <span className="inline-flex items-center rounded-full  bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
        {badgeText}
      </span>
    </div>
  );
};
