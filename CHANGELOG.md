# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Changed
- Set the default `channel` to `8`. #INT-3353
- Moved `rollup-plugin-execute` to devDependency. #INT-3353

## 3.1.0 - 2025-05-29

### Fixed
- tinymce "^v7.0.0 || ^v6.0.0 || ^v5.0.0" is now an optional peer dependency. #INT-3324

### Changed
- `disabled` property is now mapped to the TinyMCE `disabled` option. #TINY-11909

### Added
- Added `readonly` property that maps to the TinyMCE `readonly` option. #TINY-11909

## 3.0.0 - 2024-06-05

### Added
- Update README.md to contain license key info.
- Added storybook dependence's for various `storybook/...` packages.
- Added `react` and `react-dom` to dev-dependencies due to certain packages required it.
- Added events `Input`, `CompositionEnd`, `CompositionStart` & `CompositionUpdate`.
- Added `licenseKey` to config option.

### Changed
- Bumped `tinymce` version to `7.1.1` latest.
- Bumped default `cloud` channel to use `7`.

## 2.0.0 - 2023-12-04

### Changed
- Upgrade to Svelte 4

## 1.0.1 - 2023-03-17

### Fixed
- Editor now properly updates when external source updates value
- Storybook for inline mode corrected
- Updated dependencies
- Updated CI library to latest

## 1.0.0 - 2022-04-08

### Changed
- License: Code is provided under MIT License
- Default cloud channel value to '6'

## 0.1.2 - 2021-12-13

### Added
- `cssClass` property for wrapping div

## 0.1.1 - 2021-10-13

### Added
- onDestroy cleanup
- Linting
- Beehive flow

### Fixed
- Ignoring inline property from `conf` attribute

## 0.1.0 - 2021-08-18

### Added
- Build this thing
