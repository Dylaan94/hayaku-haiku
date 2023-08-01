import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Utility function for conditional classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomSelector({
  options,
  setOption,
  labelEn,
  labelJp,
  kigo = false,
}) {
  const [selectedEn, setSelectedEn] = useState(
    kigo ? (options ? options[0].en : "") : options ? options[0][0] : ""
  );

  const [selectedJp, setSelectedJp] = useState(
    kigo ? (options ? options[0].jp : "") : options ? options[0][1] : ""
  );

  return (
    <>
      {options ? (
        <Menu as="div" className="relative inline-block text-left w-full mb-4">
          {console.log(options)}
          <span className="flex pb-1">
            <h2 className="text-sm  pr-1">{labelJp}</h2>
            <h2 className="text-sm text-gray-700">{labelEn}</h2>
          </span>

          <div>
            <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {selectedJp} {selectedEn}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400 ml-auto"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {options.map((option) => (
                  <Menu.Item key={option[3]}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => {
                          kigo ? setOption(option.jp) : setOption(option[2]);
                          kigo
                            ? (setSelectedJp(option.jp),
                              setSelectedEn(option.en))
                            : (setSelectedJp(option[0]),
                              setSelectedEn(option[1]));
                        }}
                      >
                        {kigo
                          ? `${option.en} ${option.jp}`
                          : `${option[1]} ${option[0]}`}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : null}
    </>
  );
}
