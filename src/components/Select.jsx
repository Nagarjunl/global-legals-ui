import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPeople, setLocation } from "../reducers/searchSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join('')
}

const Select = ({ selectData, initialValue }) => {

  const [selected, setSelected] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected?.type === "people")
      dispatch(setPeople(selected));

    if (selected?.type === "location")
      dispatch(setLocation(selected));
  }, [selected]);

  useEffect(() => {
    setSelected(initialValue);
  }, [initialValue]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2  sm:text-sm sm:leading-6">
              <span className="block truncate">{selected?.value || "Select Data"}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {selectData.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? ' text-black' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.value}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-black' :
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default Select;


Select.propTypes = {
  fName: PropTypes.object,
  selectData: PropTypes.array,
  initialValue: PropTypes.object,
}