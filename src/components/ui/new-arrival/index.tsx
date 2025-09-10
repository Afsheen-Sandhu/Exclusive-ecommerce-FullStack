import React from "react";
import { Heading } from "../headings";
import { Button } from "../buttons";


export  function NewArrival() {
  return (
    <div className="w-full md:w-[94%] px-4 md:px-10 mx-auto mb-9">
      <Heading

        text="Featured"
        className="py-5"
        textClass="text-primary text-lg sm:text-xl md:text-2xl font-bold"
        bulletClass="bg-primary"
      />
      <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-secondary py-2">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side - PS5 */}
        <div className="bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[600px] border border-base-300">
          <img src="ps5.png" alt="PS5" className="max-h-full object-contain" />
          <div className="absolute bottom-0 left-7 text-white max-w-sm text-left">
            <h5 className="text-xl font-bold text-left mb-2">PlayStation 5</h5>
            <p className="text-md text-left mb-2">
              Black and White version of the PS5 <br />
              coming out on sale.
            </p>
            <div className="text-left">
              <Button
                className="pl-0 pt-0"
                variant="underline"
                size="md"
                label="Buy Now"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 min-h-[300px] md:min-h-[600px]">
          {/* Top - Girl */}
          <div className="bg-neutral relative flex items-center justify-end flex-1 border border-base-300">
            <img
              src="girl.png"
              alt="Girl"
              className="max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-5 text-white max-w-sm text-left">
              <h5 className="text-xl font-bold text-left mb-2">
                Women's Collection
              </h5>
              <p className="text-md text-left mb-2">
                Featured woman collections that give <br />
                you another vibe.
              </p>
              <div className="text-left">
                <Button
                  className="pl-0 pt-0"
                  variant="underline"
                  size="md"
                  label="Buy Now"
                />
              </div>
            </div>
          </div>

          {/* Bottom - Two Mini Divs */}
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="bg-neutral/90 relative flex items-center justify-center flex-1 border border-base-300">
              <img
                src="speaker.png"
                alt="Speaker"
                className="max-h-full object-contain"
              />
              <div className="absolute bottom-0 left-5 text-white max-w-sm text-left  leading-4 ">
                <h5 className="text-xl font-bold text-left mb-2">Speaker</h5>
                <p className="text-md text-left mb-2">
                  Amazon wireless speakers
                </p>
                <div className="text-left">
                  <Button
                    className="pl-0 pt-0 text-sm"
                    variant="underline"
                    size="sm"
                    label="Buy Now"
                  />
                </div>
              </div>
            </div>
            <div className="bg-neutral/90 relative flex items-center justify-center flex-1 border border-base-300 ">
              <img
                src="gucci.png"
                alt="Gucci"
                className="max-h-full object-contain"
              />
              <div className="absolute bottom-0  left-5 text-white max-w-sm text-left  leading-4 ">
                <h5 className="text-xl font-bold text-left mb-2">Gucci</h5>
                <p className="text-md text-left mb-2">GUCCI INTENSE OUD EDP</p>
                <div className="text-left">
                  <Button
                    className="pl-0 pt-0 "
                    variant="underline"
                    size="md"
                    label="Buy Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
