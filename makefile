PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash -O globstar

include makefile.config

ARCHIVE_DIRS  ?= $(shell find src/content/docs/assignments src/content/docs/tutorials -maxdepth 1 -mindepth 1 -type d)
CONTENT_DIRS  ?= $(shell find src/content -type d)

# PREREQUISITES
CONTENT_MD    ?= $(foreach dir, $(CONTENT_DIRS), $(wildcard $(dir)/*.md))

# TARGETS
ZIPS   := $(addsuffix .zip, $(ARCHIVE_DIRS))
SLIDES := $(CONTENT_MD:src/content/docs/%.md=src/artefacts/slides/%.html)
PDF    := $(CONTENT_MD:src/content/docs/%.md=src/artefacts/pdf/%.pdf)
ODT    := $(CONTENT_MD:src/content/docs/%.md=src/artefacts/odt/%.odt)
PPTX   := $(CONTENT_MD:src/content/docs/%.md=src/artefacts/pptx/%.odt)

## MAKE RULES

.PHONY: all test clean zips slides pdf odt pptx

all: $(ZIPS) $(SLIDES) $(PDF) $(ODT) $(PPTX)

clean:
	@echo "make clean! (does nothing)"

test:
	@echo "make test! (does nothing)"

zips: $(ZIPS)

slides: $(SLIDES)

pdf: $(PDF)

odt: $(ODT)

pptx: $(PPTX)

# Indebted to https://www.andrewheiss.com/blog/2020/01/10/makefile-subdirectory-zips/ for getting this approach right
.SECONDEXPANSION:

# TODO: these rules don't make any sense yet

$(ZIPS): %.zip : $$(shell find % -type f ! -path "%/.*")
	@echo "CHANGES TO:" $?
	@echo "Re-archiving..." $@
	@cd $(basename $@)/.. && \
		zip -FSr $(notdir $@) $(notdir $(basename $*)) -x $(notdir $(basename $*))/.\*
	@echo "Done."

$(SLIDES): docs/% : $$(filter content/%, $(CONTENT))
	@echo "CHANGES TO:" $?
	@echo "Copying to docs..." $<
	@mkdir -p $(dir $@) && cp $< $@
	@echo "Done."

$(PDF): docs/% : $$(filter assets/%, $(STATIC))
	@echo "CHANGES TO:" $?
	@echo "Copying to docs..." $<
	@mkdir -p $(dir $@) && cp $< $@
	@echo "Done."

$(ODT): docs/%.html : $$(filter content/%.md, $(CONTENT_MD)) $(PANDOC)
	@echo "CHANGES TO:" $?
	@echo "Re-building..." $< ", target..." $@
	@pandoc $(PANDOC_OPTIONS) --metadata-file=<(echo $@ | jq -R -f ${SCRIPTS_DIR}/breadcrumbs.jq) -o $@ $<
	@echo "Done."

$(PPTX): 
