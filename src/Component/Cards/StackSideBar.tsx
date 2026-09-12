import React from 'react';

const StackSideBar = () => {
  const stack: unknown[] = [];

  return (
    <div>
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
        <h3 className="text-lg font-bold">Your Stack</h3>
        <p className="mt-1 text-sm text-slate-500">
          {stack.length} Technology Selected
        </p>

        {stack.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
            <p className="text-sm text-slate-400">
              Nothing here yet. Add a technology to start building your stack.
            </p>
          </div>
        ) : (
          <ul>{/* selected item গুলো এখানে */}</ul>
        )}
      </aside>
    </div>
  )
};

export default StackSideBar;
