export const PrimeryBadge = ({ badgeText }) => {
  return (
    <div>
      <span className="block text-center rounded-full  bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
        {badgeText}
      </span>
    </div>
  );
};
