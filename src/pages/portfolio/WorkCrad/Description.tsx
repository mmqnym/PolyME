function Description() {
  return (
    <div className="col-span-3 col-start-4 row-span-2 row-start-2 flex h-full w-full flex-col rounded-2xl border border-gray-700 bg-gray-700/30">
      <p className="m-2 h-fit w-fit rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl text-gray-200">
        Description
      </p>
      <p className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-transparent mt-2 h-3/5 w-full overflow-auto px-6 font-ubuntu text-lg text-gray-200">
        A simple certificate server that can be used to issue certificates for your product to verify that it has been
        activated.
      </p>
    </div>
  );
}

export default Description;
