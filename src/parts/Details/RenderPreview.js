import React from "react";

import Youtube from "react-youtube";

import Accordion, { IconLock, IconPlay, Item } from "src/components/Accordion";

import Modal from "src/components/Modal";
import index from "../ListCategories";

export default function RenderPreview({ previews }) {
  return (
    <div className="accordion">
      <Accordion>
        {(Active, toggle) => {
          return previews?.map((item, ibdex) => {
            console.log(item);
            return (
              <Item
                id={item.id}
                name={item.name}
                child={item.lessons}
                active={Active}
                toggle={toggle}
                key={`${index}-${item.id}`}
              >
                {item?.lessons?.length > 0 &&
                  item.lessons.map((child, idx) => {
                    <div
                      key={`${idx}-${child.id}`}
                      className="relative flex justify-between items-center pl-8 pr-4 py-2"
                    >
                      <span className="text-gray-600">
                        {child?.name ?? "Course Name"}
                      </span>
                      {idx === 0 && (
                        <Modal
                          content={(toggleModal) => (
                            <Youtube
                              videoId={child?.video}
                              id={child?.video}
                              opts={{
                                playerVars: {
                                  autoplay: 1,
                                  controls: 1,
                                  showinfo: 1,
                                },
                              }}
                            ></Youtube>
                          )}
                        >
                          {" "}
                          {(toggleModal) => (
                            <span
                              className="link-wrapper"
                              onClick={toggleModal}
                            ></span>
                          )}
                        </Modal>
                      )}

                      {idx === 0 && (
                        <IconPlay
                          className="fill-teal-500 "
                          width={20}
                          height={20}
                        ></IconPlay>
                      )}

                      {!child.isPreview && index !== 0 && <IconLock></IconLock>}
                    </div>;
                  })}
              </Item>
            );
          });
        }}
      </Accordion>
    </div>
  );
}
