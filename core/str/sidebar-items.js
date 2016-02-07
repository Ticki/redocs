initSidebarItems({"constant":[["CONT_MASK","Mask of the value bits of a continuation byte"],["NONASCII_MASK",""],["TAG_CONT_U8","Value of the tag bits (tag mask is !CONT_MASK) of a continuation byte"]],"fn":[["char_range_at_raw","Pluck a code point out of a UTF-8-like byte slice and return the index of the next code point."],["cmp_slice","Bytewise slice comparison. NOTE: This uses the system's memcmp, which is currently dramatically faster than comparing each byte in a loop."],["contains_nonascii","Return `true` if any byte in the word `x` is nonascii (>= 128)."],["eq_slice","Bytewise slice equality NOTE: This function is (ab)used in rustc::middle::trans::_match to compare &[u8] byte slices that are not necessarily valid UTF-8."],["from_raw_parts_mut","Forms a str from a pointer and a length."],["from_utf8","Converts a slice of bytes to a string slice."],["from_utf8_unchecked","Converts a slice of bytes to a string slice without checking that the string contains valid UTF-8."],["next_code_point","Reads the next code point out of a byte iterator (assuming a UTF-8-like encoding)."],["next_code_point_reverse","Reads the last code point out of a byte iterator (assuming a UTF-8-like encoding)."],["run_utf8_validation","Walk through `iter` checking that it's a valid UTF-8 sequence, returning `true` in that case, or, if it is invalid, `false` with `iter` reset such that it is pointing at the first byte in the invalid sequence."],["slice_error_fail",""],["unwrap_or_0",""],["utf8_acc_cont_byte","Return the value of `ch` updated with continuation byte `byte`."],["utf8_first_byte","Return the initial codepoint accumulator for the first byte. The first byte is special, only want bottom 5 bits for width 2, 4 bits for width 3, and 3 bits for width 4."],["utf8_is_cont_byte","Checks whether the byte is a UTF-8 continuation byte (i.e. starts with the bits `10`)."]],"mod":[["pattern","The string Pattern API."],["traits",""]],"static":[["UTF8_CHAR_WIDTH",""]],"struct":[["Bytes","External iterator for a string's bytes. Use with the `std::iter` module."],["CharIndices","Iterator for a string's characters and their byte offsets."],["CharRange","Struct that contains a `char` and the index of the first byte of the next `char` in a string.  This can be used as a data structure for iterating over the UTF-8 bytes of a string."],["Chars","Iterator for the char (representing *Unicode Scalar Values*) of a string"],["Lines","Created with the method [`lines()`]."],["LinesAny","Created with the method [`lines_any()`]."],["LinesAnyMap","A nameable, cloneable fn type"],["MatchIndices","Created with the method [`match_indices()`]."],["MatchIndicesInternal",""],["Matches","Created with the method [`matches()`]."],["MatchesInternal",""],["ParseBoolError","An error returned when parsing a `bool` from a string fails."],["RMatchIndices","Created with the method [`rmatch_indices()`]."],["RMatches","Created with the method [`rmatches()`]."],["RSplit","Created with the method [`rsplit()`]."],["RSplitN","Created with the method [`rsplitn()`]."],["RSplitTerminator","Created with the method [`rsplit_terminator()`]."],["Split","Created with the method [`split()`]."],["SplitInternal",""],["SplitN","Created with the method [`splitn()`]."],["SplitNInternal",""],["SplitTerminator","Created with the method [`split_terminator()`]."],["Utf8Error","Errors which can occur when attempting to interpret a sequence of `u8` as a string."]],"trait":[["FromStr","A trait to abstract the idea of creating a new instance of a type from a string."],["StrExt","Methods for string slices"]]});